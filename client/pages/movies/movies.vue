<template>
  <section class="wrap container-fluid pv-m">
    <component
      :is="component"
      :shows="shows"
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
    desktop: () => import('./movies-desktop.vue'),
    mobile: () => import('./movies-mobile.vue')
  },
  computed: mapState(['locale']),
  async asyncData({ error, app, store }) {
    const { locale } = store.state;
    let shows;

    try {
      ({ shows } = await app.$axios.$get(`/api/movies?locale=${locale}`));
    } catch (e) {
      const {
        status: statusCode,
        statusText: message
      } = e.response;
      return error({ statusCode, message });
    }

    return { shows };
  },
  beforeCreate() {
    this.component = this.$store.state.deviceType;
  }
};
</script>

<style lang="scss">
</style>
