<template lang="pug">
  .screen
    transition(name="fade" appear mode="out-in")
      question(
        v-if = "!answer"
        :props = "question"
        @answered = "showAnswer" )
      message(
        v-if = "answer"
        :class = "{ correct: isCorrect }"
        @nextQuestion = "showNextQuestion")
        .answer__title
          | {{ isCorrect ? "Correct!" : "Wrong!" }}
        .full-answer
          | {{question.fullAnswer}}
        ol.references__list
          li.references__item(v-for="item in question.references")
            | {{item}}
</template>
<script>
import Question from '@/components/Question';
import Message from '@/components/Message';

export default {
  name: 'Quiz',
  data() {
    return {
      answer: '',
    };
  },
  mounted() {
    this.$store.commit('resetState');
  },
  computed: {
    getImgUrl() {
      return `/static/img/${this.question.img}.jpg`;
    },
    question() {
      return this.$store.getters.getQuestion;
    },
    step() {
      return this.$store.state.step;
    },
    questionLimit() {
      return this.$store.state.questions.length;
    },
    answerTitle() {
      return this.isCorrect() ? 'Correct' : 'wrong';
    },
    isCorrect() {
      return (this.answer === this.question.answer);
    },
  },
  methods: {
    showAnswer(answer) {
      if (answer === this.question.answer) {
        this.$store.commit('incrementCorrect');
      }
      this.answer = answer;
    },
    showNextQuestion() {
      if (this.step < this.questionLimit - 1) {
        this.answer = '';
        this.$store.commit('nextStep');
      } else {
        this.$router.push('/results');
      }
    },
  },
  components: {
    Question,
    Message,
  },
};
</script>
<style lang="scss" scoped>
  .screen {
    background-image: url('../assets/2_Image-for-Screens-2-and-3.jpg');
    background-size: cover;
  }
  .fade-enter-active, .fade-leave-active {
    transition: .3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
    opacity: 0;
    transform: translateX(150px);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-150px);
  }
</style>
