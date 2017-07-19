<template lang="pug">
  .screen
    .screen__content
      form.screen__form
        main-title.screen__title
          | Lorem ipsum
        custom-input(type="text" name="fullname" required="true" v-model="user.fullName")
          | Full Name
        custom-input(type="text" name="title" v-model="user.title")
          | Title
        custom-input(type="email" name="email" required="true" v-model="user.email")
          | Email
        custom-input(type="phone" name="phone" required="false" v-model="user.phone")
          | Phone
        div.form__item.form__item--select
          select(v-model="user.industry" :class="{ focus: user.industry }")
            -
              var options= [
                "Agriculture",
                "Foodservice",
                "Food Manufacturing",
                "Health and Media"
              ]
            each item in options
              option= item
          label(for="industry")
            | Select Industry
            sup *
        custom-input(type="text" name="company" required="true" v-model="user.company")
          | Company
        custom-button(type="button" :disabled="!isValid" @click="$router.push('/how-to-play')")
            | Submit
</template>

<script>
  import CustomButton from '@/components/CustomButton';
  import MainTitle from '@/components/MainTitle';
  import CustomInput from '@/components/CustomInput';

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
    components: {
      CustomButton,
      MainTitle,
      CustomInput,
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
  .screen {
    background: url('../assets/1_Image-for-Widget-and-Screen-1.jpg') no-repeat;
    background-size: cover;

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }
  }
  .form {
    &__item {
      position: relative;

      &--select {
        margin-top: 40px;
      }
    }
  }
  select {
    position: relative;
    border: none;
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid #ffffff;
    border-radius: 0;
    outline: none;
    color: #ffffff;
    font-weight: 300;
    padding: 10px 0;
    z-index: 1;
    appearance: none;

    &:focus,
    &.focus {
      + label {
        font-size: 12px;
        trnasform: translateY(-100%);
        top: -5px;
      }
    }
  }
  label {
    position: absolute;
    transition: .3s;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    font-weight: 300;
  }
</style>
