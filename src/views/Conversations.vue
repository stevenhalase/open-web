<template>
  <div class="conversations">
    <div class="section-title">
      <span>Conversations</span>
    </div>
    <div class="section">
      <div class="conversations-list list">
        <template v-if="!!conversations.length">
          <div
            v-for="(conversation, ind) of conversations"
            :key="ind"
            class="conversations-list-conversation list-item">
            <div class="contact-info">
              <span class="contact-info-name">{{ getConversationContactName(conversation) }}</span>
              <StatusIndicator :contact="getConversationContact(conversation)" />
            </div>
            <button
              @click="selectConversation(conversation)"
              class="btn sm primary">
              <font-awesome-icon :icon="['far', 'comment']" class="expand-icon"/>
            </button>
          </div>
        </template>
        <div
          v-else
          class="incoming-requests-list-contact list-item disabled">
          No current conversations
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import StatusIndicator from '@/components/StatusIndicator.vue';

export default {
  name: 'conversations',
  computed: {
    ...mapState({
      user: state => state.user,
      conversations: state => state.conversations
    })
  },
  mounted() {
    this.$store.dispatch('PING_ONLINE_USERS');
  },
  methods: {
    selectConversation(conversation) {
      this.$store.dispatch('START_CONVERSATION', conversation.to)
        .then(response => {
          this.$router.push({ name: 'messaging', params: { conversation: this.$store.state.currentConversation } });
        })
        .catch(error => {
          console.log(error);
        });
    },
    getConversationContact(conversation) {
      return this.user.contacts.find(c => c._id === conversation.to);
    },
    getConversationContactName(conversation) {
      const contact = this.user.contacts.find(c => c._id === conversation.to);
      if (contact) {
        return contact.username;
      } else {
        return '';  
      }
    }
  },
  components: {
    StatusIndicator
  }
}
</script>

<style lang="scss" scoped>
.conversations {
  width: 100%;
  height: 100%;
  padding: 15px;

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-info-name {
      margin-right: 5px;
    }
  }
}
</style>
