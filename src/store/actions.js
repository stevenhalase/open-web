import axios from 'axios';
import io from 'socket.io-client';
import store from './store';
import utilities from '../utilities';

// const socket = io('http://DESKTOP-PEI2O18:3000');
const socket = io('https://open-api-dev.herokuapp.com');

socket.on('connect', () => {
  console.log('CONNECT');
});

socket.on('connection_server', () => {
  console.log('connection_server');
});

socket.on('user_id_server', () => {
  console.log('user_id_server');
});

socket.on('ping_online_users_response', (response) => {
  console.log('ping_online_users_response');
  store.dispatch('SET_CONTACT_STATUS', response);
});

socket.on('message_incoming', (message) => {
  console.log('message_incoming: ', message);
  socket.emit('message_received', message);
  store.dispatch('RECEIVE_MESSAGE', message);
});

socket.on('message_confirmation_sent', (message) => {
  console.log('message_confirmation_sent');
  store.commit('SET_SENDING_MESSAGE', false);
  store.dispatch('SET_MESSAGE_STATUS', { message, status: 'confirmed' });
});

socket.on('message_confirmation_received', (message) => {
  console.log('message_confirmation_received');
  store.dispatch('SET_MESSAGE_STATUS', { message, status: 'received' });
});

const API = {
  // BASE: 'http://DESKTOP-PEI2O18:3000/api/v1/',
  BASE: 'https://open-api-dev.herokuapp.com/api/v1/',
  USER: {
    BASE: 'user',
    LOGIN: 'user/login',
    CONTACT_REQUEST: 'user/request',
    CONTACT_REQUEST_ACCEPT: 'user/request/accept'
  }
};

export default {
  LOGIN({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${API.BASE}${API.USER.LOGIN}`, payload)
        .then((response) => {
          if (response.data) {
            commit('SET_USER', response.data.user);
            commit('SET_TOKEN', response.data.token);
            axios.defaults.headers.common['Authorization'] = response.data.token;

            if (
              response.data.user.incomingContactRequests
              && response.data.user.incomingContactRequests.length
            ) {
              commit('ADD_NOTIFICATION', {
                _id: utilities.generateId(),
                message: 'New Contact Request',
                to: { name: 'contacts' }
              });
            }
            
            socket.emit('user_id', response.data.user._id);
            resolve(response.data.user);
          } else {
            console.log(response.data);
            commit('ADD_TOAST', { message: 'Login failed.' });
            reject(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          commit('ADD_TOAST', { message: 'Login failed.' });
          reject(error);
        });
    });
  },
  LOGOUT({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      commit('SET_USER', null);
      resolve();
    });
  },
  PING_ONLINE_USERS({ commit, state }) {
    if (state.user && state.user.contacts) {
      const users = [];
      for (const contact of state.user.contacts) {
        users.push(contact._id);
      }
      if (!!users.length) {
        socket.emit('ping_online_users', users);
      }
    }
  },
  SET_CONTACT_STATUS({ commit, state }, contacts) {
    console.log(state.user.contacts);
    for (const contact of contacts) {
      const userContact = state.user.contacts.find(c => c._id === contact.contact);
      if (userContact) {
        userContact.online = contact.online;
      }
    }
    console.log(state.user.contacts);
  },
  START_CONVERSATION({ commit, state }, contactId) {
    return new Promise((resolve, reject) => {

      const conversation = state.conversations.find(c => c.to === contactId);
      if (conversation) {
        commit('SELECT_CONVERSATION', conversation);
      } else {
        const newConversation = {
          to: contactId,
          messages: [],
          startedAt: Date.now()
        };
        commit('START_CONVERSATION', newConversation);
      }
      resolve();
    });
  },
  SEND_MESSAGE({ commit, state }, payload) {
    commit('SET_SENDING_MESSAGE', true);
    socket.emit('message_send', payload);
  },
  RECEIVE_MESSAGE({ commit, state }, payload) {
    const conversation = state.conversations.find(c => c.to === payload.from);
    if (conversation) {
      conversation.messages.push(payload);
    } else {
      const newConversation = {
        _id: utilities.generateId(),
        to: payload.from,
        messages: [payload],
        startedAt: Date.now()
      };
      commit('START_CONVERSATION', newConversation);
    }

    const isCurrentConversation = state.currentConversation && conversation && state.currentConversation._id === conversation._id;
    if (!isCurrentConversation) {
      commit('ADD_NOTIFICATION', {
        _id: utilities.generateId(),
        message: 'New Message',
        to: { name: 'conversations' }
      });
    }
  },
  SET_MESSAGE_STATUS({ commit, state }, payload) {
    const conversation = state.conversations.find(c => c.to === payload.message.to);
    if (conversation) {
      const message = conversation.messages.find(m => m._id === payload.message._id);
      if (message) {
        message.status = payload.status;
      }
    }
  },
  SEARCH_USERS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      const encodedTerm = encodeURIComponent(payload.term);
      axios.get(`${API.BASE}${API.USER.BASE}?field=username&operator=%3D%3D&value=${encodedTerm}`)
        .then((response) => {
          if (response.data) {
            resolve(response.data);
          } else {
            console.log(error);
            commit('ADD_TOAST', { message: 'Search failed.' });
            reject(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          commit('ADD_TOAST', { message: 'Search failed.' });
          reject(error);
        });
    });
  },
  SEND_CONTACT_REQUEST({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${API.BASE}${API.USER.CONTACT_REQUEST}`, payload)
        .then((response) => {
          if (response.data) {
            commit('SET_USER', response.data);
            commit('ADD_TOAST', { message: 'Contact request sent.' });
            resolve(response.data);
          } else {
            console.log(error);
            commit('ADD_TOAST', { message: 'Contact request failed.' });
            reject(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          commit('ADD_TOAST', { message: 'Contact request failed.' });
          reject(error);
        });
    });
  },
  ACCEPT_CONTACT_REQUEST({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${API.BASE}${API.USER.CONTACT_REQUEST_ACCEPT}`, payload)
        .then((response) => {
          if (response.data) {
            commit('SET_USER', response.data);
            commit('ADD_TOAST', { message: 'Accepted contact request.' });
            resolve(response.data);
          } else {
            console.log(error);
            commit('ADD_TOAST', { message: 'Contact request accept failed.' });
            reject(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          commit('ADD_TOAST', { message: 'Contact request accept failed.' });
          reject(error);
        });
    });
  }
};