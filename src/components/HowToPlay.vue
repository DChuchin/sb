<template lang="pug">
  .screen
    transition(name = "fade" appear)
      .screen__rules
        main-title.screen__title
          | {{ title }}
          b
            | {{ secondTitle }}
        h3.list-title
          | {{ listTitle }}
        ol
          li(v-for="item in list")
            | {{ item }}
        custom-button.start(@click="start")
          | Start
</template>
<script>
import MainTitle from '@/components/MainTitle';
import CustomButton from '@/components/CustomButton';

export default {
  data() {
    return {
      title: 'Trivia',
      secondTitle: 'Application',
      listTitle: 'How to Play?',
      list: [
        'Lorem ipsum dolor sit amet',
        'consectetur adipisicing elit. Dolor dolorum',
        'atque delectus perferendis',
      ],
    };
  },
  methods: {
    start() {
      this.$router.push('/quiz');
    },
  },
  components: {
    MainTitle,
    CustomButton,
  },
};
</script>
<style lang="scss" scoped>
  .screen {
    background-image: url(../assets/1_Image-for-Widget-and-Screen-1.jpg);
    background-size: cover;

    &__rules {
      width: 50%;
      margin-left: auto;
      margin-top: auto;
      margin-bottom: auto;
      background: rgba(0,0,0, .6);
      padding: 30px;
      color: #ffffff;
    }
  }
  .start {
    background-color: green;

    &:hover,
    &:focus {
      background-color: darken( green , 5%);
    }
  }

  .list-title {
    text-transform: uppercase;
    font-weight: 300;
    color: #febf02;
    margin-bottom: 30px;
  }

  ol {
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    list-style: none;
    counter-reset: item;
  }

  li {
    margin-bottom: 25px;
    font-weight: 300;
    color: #ffffff;
    font-size: 14px;

    &:before {
      content: counter(item);
      counter-increment: item;
      color: #febf02;
      font-size: 18px;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
</style>
