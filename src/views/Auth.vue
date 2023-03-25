<template lang="pug">
    .auth(v-if="login")
        input(v-model='name' placeholder='username')
        input(v-model='password' placeholder='password')
        button(@click="signIn") Sign in
        button(@click="login = false") I need to create acc
    .auth(v-else)
        input(v-model='name' placeholder='username')
        input(v-model='email' placeholder='email')
        input(v-model='password' placeholder='password')
        button(@click="signIn") Sign up
        button(@click="login = true") I need to login
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      login: false
    };
  },
  methods: {
    signIn() {
      this.$store.dispatch("signIn", {
        username: this.name,
        password: this.password
      });
      setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 1000);
    },
    signUp() {
      this.$store.dispatch("signUp", {
        username: this.name,
        password: this.password,
        email: this.email
      });
      setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.auth {
  padding-top: 30vh;
  width: max-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
