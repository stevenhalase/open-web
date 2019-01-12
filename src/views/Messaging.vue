<template>
  <div class="messaging">
    <div class="section-title">
      <span>Messaging</span>
      <div class="contact-info">
        <span class="contact-info-name">{{ conversationContact ? conversationContact.username : '' }}</span>
        <StatusIndicator :contact="conversationContact" />
      </div>
    </div>
    <Messages :conversation="conversation" />
    <MessageActions :conversation="conversation" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Messages from '@/components/Messages.vue';
import MessageActions from '@/components/MessageActions.vue';
import StatusIndicator from '@/components/StatusIndicator.vue';

export default {
  name: 'messaging',
  props: {
    conversation: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      user: state => state.user,
    }),
    conversationContact() {
      if (this.conversation) {
        return this.user.contacts.find(c => c._id === this.conversation.to);
      } else {
        return null;
      }
    }
  },
  mounted() {
    this.$store.dispatch('PING_ONLINE_USERS');
    if (!this.conversation) {
      this.$router.push({ name: 'contacts' });
    }
  },
  methods: {
    goTo(to) {
      this.$router.push({ name: to });
    }
  },
  components: {
    Messages,
    MessageActions,
    StatusIndicator
  }
}
</script>

<style lang="scss" scoped>
.messaging {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;

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
