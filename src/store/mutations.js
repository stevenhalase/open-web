export default {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_SENDING_MESSAGE(state, payload) {
    state.sendingMessage = payload;
  },
  SELECT_CONVERSATION(state, payload) {
    state.currentConversation = payload;
  },
  START_CONVERSATION(state, payload) {
    state.conversations.push(payload);
    state.currentConversation = payload;
  },
  ADD_TOAST(state, payload) {
    state.toasts = [payload];
  },
  CLEAR_TOAST(state, payload) {
    state.toasts = [];
  },
  ADD_NOTIFICATION(state, payload) {
    state.notifications.push(payload);
  },
  CLEAR_NOTIFICATION(state, notificationId) {
    const ind = state.notifications.findIndex(n => n._id === notificationId);
    if (ind > -1) {
      state.notifications.splice(ind, 1);
    }
  }
}