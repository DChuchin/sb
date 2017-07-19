<template lang="pug">
  .answer(:class="modifyClass")
    .answer__text
      .answer__title
        | {{title}}
      .full-answer
        | {{props.question.fullAnswer}}
      ol.references__list
        li.references__item(v-for="item in props.question.references")
          | {{item}}
    custom-button.answer__next(
      type="button"
      @click="$emit('nextQuestion')")
      | Next
</template>

<script>
  import CustomButton from '@/components/CustomButton';

  export default {
    name: 'message',
    props: ['props'],
    data() {
      return {
      };
    },
    components: {
      CustomButton,
    },
    computed: {
      title() {
        return this.props.isCorrect ? 'Correct!' : 'Wrong!';
      },
      modifyClass() {
        return this.props.isCorrect ? 'correct' : 'wrong';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .answer {
    position: relative;
    margin: auto;
    width: calc(100 - 20px);
    max-width: 800px;
    padding: 20px 30px;

    &.wrong {
      background-color: rgba( orange, .9);

      .answer__text {
        border-color: green;
      }

      .answer__title {
        &:before {
          content: '';
          position: absolute;
          height: 0;
          width: 35px;
          border-bottom: 2px solid #000000;
          transform-origin: center;
          transform: translate(-100%, -50%) rotate(-45deg);
          top: 45%;
          left: -10px;
        }

        &:after {
          content: '';
          position: absolute;
          height: 0;
          width: 35px;
          border-bottom: 2px solid #000000;
          transform-origin: center;
          transform: translate(-100%, -50%) rotate(45deg);
          top: 45%;
          left: -10px;
        }
      }
    }

    &.correct {
      background-color: rgba(green, .9);

      .answer__title {
        &:before {
          content: '';
          position: absolute;
          height: 5px;
          width: 35px;
          border-bottom: 2px solid #000000;
          border-left: 2px solid #000000;
          transform-origin: center;
          transform: translate(-100%, -50%) rotate(-45deg);
          top: 45%;
          left: -10px;
        }
      }
    }

    &__text {
      border-left: 10px solid orange;
      margin-left: -30px;
      padding-left: 60px;
    }

    &__title {
      position: relative;
      font-size: 40px;
      font-weight: 300;
      color: #000000;
    }

    &__next {
      position: absolute;
      right: 0;
      top: calc(100% + 10px);
      width: auto;
    }
  }
</style>
