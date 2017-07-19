<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
  };
</script>
<style lang="scss">
  @import '~normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700');

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    width: 100%;
    height: 100vh;
    color: #ffffff;
  }
</style>
<style lang="scss">
.screen {
  display: flex;
  height: 100%;
  width: 100%;
  background-size: cover;

  &__content {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    height: 100%;
    padding: 50px 30px;
    background-color: rgba(green, .7);
  }

  &__title {
    margin-left: -30px;
  }
}
</style>
