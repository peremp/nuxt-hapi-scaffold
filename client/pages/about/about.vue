<template>
  <section>
    <component
      :is="component"
      :data="data"
      :locale="locale"
    />
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  layout({ store }) {
    return store.state.deviceType;
  },
  components: {
    desktop: () => import('./about_desktop'),
    mobile: () => import('./about_mobile')
  },
  computed: mapState({
    locale: 'locale',
    apiUrl: 'DATA_BASE_API_URL',
    deviceType: 'deviceType'
  }),
  async asyncData({ app, store }) {
    const { locale } = store.state;
    const data = await app.$axios.$get(`/api/about?locale=${locale}`);

    return { data };
  },
  beforeCreate() {
    this.component = this.$store.state.deviceType;
  }
};
</script>

<style lang="scss">
</style>
