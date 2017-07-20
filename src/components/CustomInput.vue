<template lang="pug">
  div.wrap
    input(
      :type="type"
      :name="name"
      :required="required"
      :class="{ focus: focus }"
      :value="code"
      @input="updateCode($event.target.value)")
    label(:for="name")
      slot
        | Label
      sup(v-if="required") *
</template>
<script>
export default {
  name: 'CustomInput',
  props: ['type', 'name', 'required', 'value'],
  computed: {
    code() {
      return this.value;
    },
    focus() {
      return !!this.code;
    },
  },
  methods: {
    updateCode(code) {
      this.code = code;
      this.$emit('input', code);
    },
  },
};
</script>
<style lang="scss" scoped>
  
  .wrap {
    position: relative;
  }

  input {
    position: relative;
    border: none;
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid rgba(#ffffff, .3);
    outline: none;
    border-radius: 0;
    color: #ffffff;
    font-weight: 300;
    padding: 10px 0;
    z-index: 1;

    &:focus,
    &.focus {
      +label {
        font-size: 12px;
        transform: translateY(-100%);
        top: -5px;
      }
    }
  }

  label {
    position: absolute;
    transition: .3s;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    font-weight: 300;
  }
</style>
