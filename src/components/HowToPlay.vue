<template lang="pug">
  div
    h1.title
      | {{ title }}
    h3.list-title
      | {{listTitle}}
    ol
      li(v-for="item in list")
        | {{ item }}
    button(@click="start")
      | Start
</template>
<script>
export default {
  data() {
    return {
      title: 'Trivia Application',
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
      this.$emit('startGame');
    },
  },
};
</script>

