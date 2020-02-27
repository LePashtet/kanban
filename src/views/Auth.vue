<template lang="pug">
    .auth
        input(v-model='name' placeholder='username')
        input(v-model='password' placeholder='password')
        button(@click="signIn") Sign in
</template>

<script>
    export default {
        name: "Auth",
        data(){
            return{
                name: '',
                email: '',
                password: ''
            }
        },
        methods:{
            signIn(){
                this.$store.dispatch('signIn', {username: this.name, password: this.password})
            }
        }
    }
</script>

<style scoped>

</style>