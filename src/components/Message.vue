<template lang="pug">
  .wrapper.wrong
    .title
      | {{ title }}
    .answer
      | {{ answer }}
    .preferences
      | {{ preferences }}
</template>

<script>
  export default {
    name: 'message',
    data() {
      return {
        title: 'Wrong',
        answer: 'A. Soybean oil is 48%',
        preferences: 'References: 1United Soybean Board\'s Consumer Attitudes about Nutrition 2015 study 2Schnucks 2014 shopper intercept survey',
      };
    },
  };
</script>

<style lang="scss" scoped>

</style>
