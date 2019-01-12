<template>
  <div
    class="toast"
    :class="{ show }">
    <div
      v-for="(toast, ind) of toasts"
      :key="ind"
      class="toast-item">
      <div class="toast-item-message">
        {{ toast.message }}
      </div>
      <button
        @click="clear"
        class="btn sm toast-item-close">
        <font-awesome-icon :icon="['fas', 'times']" class="close-icon"/>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'toast',
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapState({
      toasts: state => state.toasts
    })
  },
  methods: {
    clear() {
      this.show = false;
      setTimeout(() => {
        this.$store.commit('CLEAR_TOAST');
      }, 250);
    }
  },
  watch: {
    toasts: {
      immediate: true,
      handler(toasts) {
        if (toasts.length) {
          this.show = true;
          // setTimeout(() => {
          //   this.show = false;
          // }, 3000);
        } else {
          this.show = false;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

.toast {
  position: fixed;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s ease-in-out;

  &.show {
    bottom: 15px;
  }

  .toast-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $prestige-blue;
    color: $white;
    padding: 10px;
    border-radius: 4px;

    .toast-item-message {
      margin-right: 10px;
    }

    .toast-item-close {
      cursor: pointer;
    }
  }
}
</style>
