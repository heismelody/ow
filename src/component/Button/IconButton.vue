<style lang="css">
</style>

<template lang="html">
  <ow-button>
    <slot></slot>
  </ow-button>
</template>

<script>
import owButton from './Button.vue';

export default {
  name: 'owIconButton',

  props: {
    name: String
  },

  components: {
    owButton
  }
}
</script>
