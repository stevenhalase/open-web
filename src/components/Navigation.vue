<template>
  <div class="navigation">
    <div class="navigation-bar">
      <img
        :src="logo"
        class="logo" />
      <div class="navigation-bar-right">
        <MenuNotifications />
        <button
          @click="toggleMenu"
          class="btn light expand">
          <font-awesome-icon :icon="['fas', 'ellipsis-v']" class="expand-icon"/>
        </button>
      </div>
    </div>
    <div
      class="navigation-content"
      :class="{ show }">
      <div
        v-for="(navigationItem, ind) of navigation.items"
        :key="ind"
        @click="goTo(navigationItem.to)"
        class="navigation-content-item"
        :class="{ active: isActive(navigationItem) }">
        {{ navigationItem.text }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import logo from '@/assets/open-logo.svg';
import MenuNotifications from '@/components/MenuNotifications.vue';

export default {
  name: 'navigation',
  data() {
    return {
      show: false,
      logo
    }
  },
  computed: {
    ...mapState({
      navigation: state => state.navigation
    })
  },
  methods: {
    toggleMenu() {
      this.show = !this.show;
    },
    goTo(to) {
      this.show = false;
      this.$router.push(to);
    },
    isActive(navigationItem) {
      return this.$route.name === navigationItem.to.name;
    }
  },
  components: {
    MenuNotifications
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

.navigation {
  width: 100%;
  position: relative;
  z-index: 100;

  .navigation-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: $anti-flash-white;

    .logo {
      width: 75px;
    }

    .navigation-bar-right {
      display: flex;
      align-items: center;
    }
  }

  .navigation-content {
    position: absolute;
    right: -100%;
    width: 0;
    background-color: $white;
    padding: 15px 0;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &.show {
      right: 0;
      width: 100%;
      padding: 15px;
    }

    .navigation-content-item {
      padding: 15px;
      border-left: 3px solid transparent;

      &:hover {
        cursor: pointer;
        background-color: $anti-flash-white;
        border-left: 3px solid $saturated-sky;
      }

      &.active {
        pointer-events: none;
        border-left: 3px solid $saturated-sky;
      }
    }
  }

}
</style>
