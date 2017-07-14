<template lang="pug">
  form
    div.form-item
      label(for="fullname" :class="{ focus: user.fullName }")
        | Full Name
        sup *
      input(type="text" name="fullname" v-model="user.fullName")
    div.form-item
      label(for="title" :class="{ focus :user.title }")
        | Title
      input(type="text" name="title" v-model="user.title")
    div.form-item
      label(for="email" :class="{ focus: user.email } ")
        | Email
        sup *
      input(type="email" name="email" v-model="user.email")
    div.form-item
      label(for="phone" :class="{ focus: user.phone }")
        | Phone
      input(type="phone" v-model="user.phone")
    div.form-item
      label(for="industry" :class="{ focus: user.industry }")
        | Select Industry
        sup *
      select(v-model="user.industry")
        -
          var options= [
            "Agriculture",
            "Foodservice",
            "Food Manufacturing",
            "Health and Media"
          ]
        each item in options
          option= item
    div.form-item
      label(for="company" :class="{ focus: user.company }")
        | Company
        sup *
      input(type="text" v-model="user.company")
    router-link(to="Quiz")
      button(type="submit" :disabled="!isValid" @click="submit")
        | Submit
</template>
<script>
  export default {
    name: 'registration',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        showNotify: false,
        user: {
          fullName: null,
          title: null,
          email: null,
          phone: null,
          industry: null,
          company: null,
        },
      };
    },
    computed: {
      isValid() {
        return this.user.fullName && this.user.email && this.user.industry && this.user.company;
      },
    },
    methods: {
      submit() {
      },
    },
  };
</script>
<style lang="scss" scoped>
  $c-white: #ffffff;
  input {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid $c-white;
  }
</style>
