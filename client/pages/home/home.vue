<template>
  <section class="content">
    <h1>
      {{ $t('ui.pages.home.title') }} ({{ deviceType }})
    </h1>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CustomIcon from '../../components/CustomIcon/index.vue';

export default {
  components: {
    CustomIcon
  },
  layout({ store }) {
    return store.state.deviceType;
  },
  computed: {
    ...mapState([
      'locale',
      'deviceType'
    ])
  },
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
