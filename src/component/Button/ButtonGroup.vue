<style lang="less">
@import '../../theme/index.less';
@import './styles/ButtonGroup.@{theme}.less';
</style>

<template lang="html">
  <div class="ow-btn-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'owButtonGroup'
}
</script>
