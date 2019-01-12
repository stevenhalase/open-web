export default {
  user: null,
  token: null,
  currentConversation: null,
  sendingMessage: false,
  conversations: [],
  toasts: [],
  notifications: [],
  navigation: {
    items: [
      {
        text: 'Conversations',
        to: { name: 'conversations' }
      },
      {
        text: 'Contacts',
        to: { name: 'contacts' }
      },
      {
        text: 'Messaging',
        to: { name: 'messaging' }
      },
      {
        text: 'Settings',
        to: { name: 'settings' }
      }
    ]
  }
}