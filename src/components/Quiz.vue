<template lang="pug">
  .screen
    component(
      :is = "currentView"
      @showResults = "showResults"
      @answered = "showAnswer"
      @nextQuestion = "showNextQuestion"
      @finish = "finish"
      :props = "currentProps")
</template>
<script>
import Question from '@/components/Question';
import Results from '@/components/Results';
import Message from '@/components/Message';
import Questions from '../data/questions.json';

export default {
  name: 'Quiz',
  data() {
    return {
      step: 0,
      currentView: 'Question',
      questions: Questions,
      currentProps: '',
    };
  },
  created() {
    this.currentProps = this.questions[this.step];
  },
  computed: {
    results() {
      return {
        correct: 0,
        all: this.questions.length,
      };
    },
  },
  methods: {
    showResults(results) {
      this.currentProps = results;
      this.currentView = 'Results';
    },
    showAnswer(answer) {
      if (answer) {
        this.results.correct = this.results.correct + 1;
      }
      this.currentProps = {
        isCorrect: answer,
        question: this.questions[this.step],
      };
      this.currentView = 'Message';
    },
    showNextQuestion() {
      if (this.step < this.questions.length - 1) {
        this.step = this.step + 1;
        this.currentProps = this.questions[this.step];
        this.currentView = 'Question';
      } else {
        this.currentProps = this.results;
        this.currentView = 'Results';
      }
    },
    finish() {
      console.log(this.results);
    },
  },
  components: {
    Question,
    Results,
    Message,
  },
};
</script>
<style lang="scss" scoped>
  .screen {
    background-image: url('../assets/2_Image-for-Screens-2-and-3.jpg');
    background-size: cover;
  }
</style>

