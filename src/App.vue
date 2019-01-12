<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Toast />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import Toast from '@/components/Toast';

export default {
  name: 'app',
  mounted() {
    setInterval(() => {
      this.$store.dispatch('PING_ONLINE_USERS');
    }, 10000);
  },
  components: {
    Toast,
    Navigation
  }
}
</script>

<style lang="scss">
@import './style/global';

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
