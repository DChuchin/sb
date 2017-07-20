import Vue from 'vue';
import Vuex from 'vuex';
import Questions from '../data/questions.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
    user: {
      fullName: '',
      email: '',
      title: '',
      phone: '',
      industry: '',
      company: '',
    },
    questions: Questions,
    correctAnswers: 0,
  },
  mutations: {
    nextStep(state) {
      const myState = state;
      myState.step += 1;
    },
    incrementCorrect(state) {
      const myState = state;
      myState.correctAnswers += 1;
    },
    setUser(state, user) {
      const myState = state;
      myState.user = user;
    },
    resetState(state) {
      const myState = state;
      myState.step = 0;
      myState.correctAnswers = 0;
    },
  },
  actions: {
    finish() {
    },
  },
  getters: {
    getResults(state) {
      return {
        user: state.user,
        correct: state.correctAnswers,
        all: state.questions.length,
      };
    },
    getQuestion(state) {
      return state.questions[state.step];
    },
  },
});
