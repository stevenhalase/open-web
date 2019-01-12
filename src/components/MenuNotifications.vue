<template>
  <div class="menu-notifications">
    <button
      @click="openNotificationsSheet"
      class="menu-notifications-indicator btn primary"
      :class="{ show }">
      <span>{{ notifications.length }}</span>
    </button>
    <Sheet
      :show="showNotificationsSheet"
      :title="'Notifications'"
      @close="closeNotificationsSheet">
      <div class="section">
        <div class="notifications-list list">
          <template v-if="notifications.length">
            <div
              @click="goTo(to)"
              v-for="(notification, ind) of notifications"
              :key="ind"
              class="notifications-list-contact list-item">
              {{ notification.message }}
            </div>
          </template>
          <div
            v-else
            class="notifications-list-contact list-item disabled">
            No notifications
          </div>
        </div>
      </div>
    </Sheet>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Sheet from '@/components/Sheet.vue';

export default {
  name: 'menu-notifications',
  data() {
    return {
      showNotificationsSheet: false
    };
  },
  computed: {
    ...mapState({
      notifications: state => state.notifications
    }),
    show() {
      return !!this.notifications.length;
    }
  },
  methods: {
    openNotificationsSheet() {
      this.showNotificationsSheet = true;
    },
    closeNotificationsSheet() {
      this.showNotificationsSheet = false;
    },
    goTo(to) {

    }
  },
  components: {
    Sheet
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

.menu-notifications {
  
  .menu-notifications-indicator {
    display: none;
    margin-right: 0;

    &.show {
      display: flex;
      margin-right: 5px;
    }
  }
}
</style>
