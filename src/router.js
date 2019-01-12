import Vue from 'vue';
import Router from 'vue-router';
import Auth from './views/Auth.vue';
import Conversations from './views/Conversations.vue';
import Messaging from './views/Messaging.vue';
import Contacts from './views/Contacts.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth
    },
    {
      path: '/conversations',
      name: 'conversations',
      component: Conversations
    },
    {
      path: '/messaging',
      name: 'messaging',
      component: Messaging,
      props: true
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/settings',
      name: 'settings',
      component: Contacts
    }
  ]
});
