<template>
  <section class="content">
    <h1>
      {{ $t('ui.pages.home.title') }} ({{ deviceType }})
    </h1>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  layout({ store }) {
    return store.state.deviceType;
  },
  computed: mapState(['deviceType']),
  head() {
    return {
      bodyAttrs: {
        class: 'home'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
