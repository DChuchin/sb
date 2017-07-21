<template lang="pug">
  .screen
    transition(name = "slide" appear)
      .screen__content
        main-title.screen__title
          | Thank you
          b
            | For Playing!
        .results
          .results__numbers
            .results__correct
              | {{results.correct}}/
            .results__all
              | {{results.all}}
          .results__text
            | correct answers
        .bottom-text(:class="{'is-animated': animate}")
          | Look out for future emails with opportunities to play new soy trivia as well as the latest soybean oil labeling campaign results.
        custom-button(@click = "finish")
          | Finish
</template>
<script>
  import CustomButton from '@/components/CustomButton';
  import MainTitle from '@/components/MainTitle';

  export default {
    data() {
      return {
        isFinished: false,
        animate: false,
      };
    },
    components: {
      CustomButton,
      MainTitle,
    },
    computed: {
      results() {
        return this.$store.getters.getResults;
      },
    },
    methods: {
      finish() {
        this.animate = true;
        this.$store.dispatch('finish');
      },
    },
  };
</script>
<style lang="scss" scoped>
  .bottom-text {
    margin-left: -30px;
    margin-right: -30px;
    padding: 30px;
    font-size: 20px;
    background-color: rgba(black, .5);
    font-weight: 100;
    line-height: 1.75;
    transition: .5s;
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;

    &.is-animated {
      max-height: 300px;
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
  .slide-up-enter-active, .slide-up-leave-active {
    transition: .3s;
  }
  .slide-up-enter{
    opacity: 0;
    transform: translateY(100%);
  }
  .screen {
    background: url('../assets/7_Image-for-Finsh-Screen.jpg') no-repeat center;
    background-size: cover;

    &__content {
      align-items: stretch;
      justify-content: space-between;
    }

    &__title {
      margin-left: -30px;
    }
  }
  .results {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    border-radius: 50%;
    min-width: 250px;
    min-height: 250px;
    max-width: 250px;
    max-height: 250px;
    border: 3px solid #ffffff;
    text-align: center;
    margin: 20px auto;
    transition: .3s;

    &__numbers {
      display: flex;
      align-items: baseline;
      justify-content: center;
      line-height: 1;
    }

    &__correct {
      font-size: 112px;
    }
    &__all {
      font-size: 48px;
    }
    &__text {
      width: 100%;
      font-size: 20px;
      text-transform: uppercase;
    }
  }
</style>

