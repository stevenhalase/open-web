<template>
  <div class="auth">
    <div class="auth-container section">
      <img
        :src="logo"
        class="logo" />
      <input
        v-model="user.username"
        placeholder="Username"
        class="input"
        type="text" />
      <input
        v-model="user.password"
        @keydown.enter="login"
        placeholder="Password"
        class="input"
        type="password" />
      <button
        @click="login"
        class="btn lg primary">Login</button>
      <button
        @click="register"
        class="btn light">Register</button>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/open-logo.svg';

export default {
  name: 'auth',
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      logo
    }
  },
  methods: {
    login() {
      this.$store.dispatch('LOGIN', this.user)
        .then(response => {
          console.log(response);
          this.$router.push({ name: 'conversations' });
        })
        .catch(error => {
          console.log(error);
        });
    },
    register() {

    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .auth-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    .logo {
      align-self: center;
      margin-bottom: 15px;
    }
  }
}
</style>
