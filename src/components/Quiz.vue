<template lang="pug">
  component(:is="currentView" @startGame="changeView")
</template>
<script>
import HowToPlay from '@/components/HowToPlay';
import Message from '@/components/Message';
import Question from '@/components/Question';
import quiz from '../data/questions.json';

export default {
  name: 'Quiz',
  data() {
    return {
      step: 0,
      currentView: 'HowToPlay',
      questions: quiz,
    };
  },
  components: {
    HowToPlay,
    Message,
    Question,
  },
  methods: {
    changeView() {
      this.currentView = 'Question';
    },
  },
};
</script>
