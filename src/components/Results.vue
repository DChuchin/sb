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
        custom-button(@click = "finish")
          | Finish
</template>
<script>
  import CustomButton from '@/components/CustomButton';
  import MainTitle from '@/components/MainTitle';

  export default {
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
        this.$emit('finish');
        this.$router.push('/finish');
      },
    },
  };
</script>
<style lang="scss" scoped>
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

