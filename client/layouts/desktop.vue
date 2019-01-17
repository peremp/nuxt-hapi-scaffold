<template>
  <div>
    <main-menu />
    <nuxt />
  </div>
</template>

<script>
import MainMenu from '../components/MainMenu.vue';

export default {
  components: {
    MainMenu
  }
};
</script>

<style lang="scss">
.content {
  padding: 2rem;
  border-bottom: 1px solid $color-grey-light;
}
</style>
