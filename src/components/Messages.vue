<template>
  <div class="messages">
    <template v-if="conversation">
      <div v-for="(message, ind) of conversation.messages" :key="ind" class="message" :class="[ incoming(message) ? 'incoming' : 'outgoing' ]">
        <div class="message-content">{{ message.message }}</div>
        <div class="message-indicator" :class="`${message.status}`"></div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'messages',
  props: {
    conversation: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      user: state => state.user,
    })
  },
  methods: {
    incoming(message) {
      return message.from !== this.user._id;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

.messages {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: $anti-flash-white;

  .message {
    display: inline-flex;
    align-items: center;
    margin: 5px 0;

    &.incoming {
      align-self: flex-start;

      .message-content {
        background-color: $twinkle-blue;
        color: $prestige-blue;
      }

      .message-indicator {
        display: none;
      }
    }

    &.outgoing {
      align-self: flex-end;

      .message-content {
        background-color: $saturated-sky;
        color: $white;
        margin-right: 5px;
      }
    }

    .message-content {
      border-radius: 4px;
      padding: 5px 10px;
    }

    .message-indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;

      &.sent {
        background-color: $white;
        border: 1px solid $bay-wharf;
      }

      &.confirmed {
        background-color: $bay-wharf;
        border: 1px solid $bay-wharf;
      }

      &.received {
        background-color: $white;
        border: 1px solid $saturated-sky;
      }

      &.read {
        background-color: $saturated-sky;
        border: 1px solid $saturated-sky;
      }
    }
  }
}
</style>
