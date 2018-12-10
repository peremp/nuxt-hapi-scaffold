<template>
  <svg
    :class="['icon', icon]"
    viewBox="0 0 32 32">
    <path
      v-for="path in paths"
      :key="path.id"
      :d="path" />
  </svg>
</template>
<script>
import paths from './iconsPaths.json';

export default {
  name: 'CustomIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    paths() {
      return paths[this.icon];
    }
  }
};
</script>
<style lang="scss" scoped>
.icon {
  & {
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }
}
</style>
