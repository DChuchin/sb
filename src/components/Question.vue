<template lang="pug">
  .question
    .question__content
      .question__body
        .question__text
          .question__number
            | 1
          | {{ props.text }}
      .question__answers
        label(v-for = "res in props.options")
          input(
            type = "radio"
            name = "response"
            :value = "res"
            v-model = "response"
            @click = "answered")
          | {{res}}
</template>

<script>
export default {
  props: ['props'],
  data() {
    return {
      response: '',
    };
  },
  computed: {
    question() {
      return this.props;
    },
    isCorrect() {
      return (this.question.answer === this.response);
    },
  },
  methods: {
    answered() {
      this.$emit('answered', this.isCorrect);
    },
  },
};
</script>
<style lang="scss" scoped>
  .question {
    display: flex;
    margin: auto;
    width: calc(100% - 20px);
    max-width: 1200px;

    &__content {
      display: flex;
      margin: auto;
    }

    &__body {
      position: relative;
      width: 50%;
      flex: 1 1 auto;
      background-color: rgba(0, 0, 0, 0.85);
      padding: 10px 15px 40px 30px;

      &:after {
        content: '';
        position: absolute;
        width: 10px;
        background: orange;
        height: 60%;
        top: 10px;
        left: 0;
      }
    }

    &__text {
      font-weight: 100;
      font-size: 24px;
      line-height: 1.75;
    }

    &__number {
      color: green;
      font-size: 36px;
      line-height: 1;
      margin-bottom: 20px;
    }

    &__answers {
      display: flex;
      width: 50%;
      flex: 1 1 auto;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(green, .85);
      padding: 40px 10px;
    }
  }

  input {
    display: none;
  }

  label {
    padding: 15px;
    background-color: lighten(green, 10%);
    margin-bottom: 2px;
    text-transform: uppercase;
    transition: .3s;
    font-weight: 400;
    font-size: 24px;

    &:hover,
    &:focus {
      background-color: lighten(green, 5%);
    }
  }
</style>

