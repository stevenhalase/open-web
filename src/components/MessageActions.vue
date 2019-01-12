<template>
  <div class="message-actions">
    <div class="message-actions-container">
      <input
        v-model="message.message"
        @keydown.enter="sendMessage"
        class="message-actions-input input" />
      <button
        @click="sendMessage"
        class="btn"
        :class="{ disabled: sendingMessage }">
        <font-awesome-icon v-if="sendingMessage" :icon="['fas', 'spinner']" spin class="expand-icon"/>
        <span v-else>Send</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import utilities from '@/utilities.js';

export default {
  name: 'message-actions',
  props: {
    conversation: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      message: {
        to: null,
        message: '',
        status: 'sent'
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user,
      sendingMessage: state => state.sendingMessage
    })
  },
  methods: {
    sendMessage() {
      const newMessage = Object.assign({}, this.message);
      newMessage._id = utilities.generateId();
      this.conversation.messages.push(newMessage);
      this.$store.dispatch('SEND_MESSAGE', newMessage);
      this.message.message = '';
    }
  },
  watch: {
    conversation: {
      immediate: true,
      handler(newConversation) {
        if (newConversation) {
          this.message.to = newConversation.to;
        }
      }
    },
    user: {
      immediate: true,
      handler(newUser) {
        if (newUser) {
          this.message.from = newUser._id;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.message-actions {
  width: 100%;
  display: flex;

  .message-actions-container {
    width: 100%;
    display: flex;

    .message-actions-input {
      margin-right: 5px;
      flex: 1;
    }
  }
}
</style>
