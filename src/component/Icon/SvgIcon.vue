<style lang="less">
  @import './styles/SvgIcon.default.less';
</style>

<template>
  <span
    class='ow-svg-icon'
    :class='[
      size ? "ow-svg-icon-" + size : ""
    ]'
    :style='{ fill: color }'
    v-html='icon'>
  </span>
</template>

<script>
  import pencil from './svg/pencil.svg';
  import alignHorizontalMiddle from './svg/align-horizontal-middle.svg'
  import eye from './svg/eye.svg'
  import arrowLeft from './svg/arrow-left.svg'
  import arrowRight from './svg/arrow-right.svg'
  import settings from './svg/settings.svg'
  import menuBook from './svg/book.svg'
  import menuPaper from './svg/file-o.svg'
  import menuTags from './svg/tags.svg'
  import down from './svg/caret-down.svg'

  const icons = {
    pencil,
    alignHorizontalMiddle,
    eye,
    arrowRight,
    arrowLeft,
    settings,
    menuBook,
    menuPaper,
    menuTags,
    down
  }

  export default {
    name: 'owSvgIcon',

    props: {
      name: {
        required: true,
        type: String
      },
      size: {
        type: String,
        default: 'sm'
      },
      color: {
        type: String,
        default: '#000'
      }
    },
    computed: {
      icon() {
        return icons[this.name]
      }
    }
  }
</script>
