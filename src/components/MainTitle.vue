<template lang="pug">
  h1
    slot
      | Title
</template>

<style lang="scss" scoped>
  h1 {
    border-left: 10px solid #febf02;
    font-size: 36px;
    line-height: 1;
    text-transform: uppercase;
    padding-left: 15px;
    font-weight: 300;

    > b {
      display: block;
      font-weight: 700;
    }
  }
</style>

