<template lang="pug">
  .screen
    .screen__content
      .screen__header
        main-title.screen__title
          | Thank you
          b
            | For Playing!
      .screen__main
      .screen__footer
        |  Look out for future emails with opportunities to play new soy trivia as well as the latest soybean oil labeling campaign results.
</template>
<script>
  import MainTitle from '@/components/MainTitle';

  export default {
    components: {
      MainTitle,
    },
  };
</script>

<style lang="scss" scoped>
  .screen {
    background: url('../assets/7_Image-for-Finsh-Screen.jpg') no-repeat center;
    background-size: cover;
    
    &__content {
      background: none;
      padding: 0;
    }

    &__header {
      padding: 30px;
      background-color: rgba(green, .7);
      flex: 1 1 20%;
    }

    &__main {
      padding: 30px;
      background-color: rgba(black, .7);
      flex: 1 1 40%;
    }

    &__footer {
      padding: 30px;
      background-color: rgba(green, .7);
      flex: 1 1 40%;
      text-align: center;
      font-size: 24px;
    }
  }
</style>

