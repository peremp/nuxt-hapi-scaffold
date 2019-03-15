<template>
  <section class="wrap container-fluid pv-m">
    <div class="row mb-m">
      <div class="col-xs-12">
        <p class="box">
          {{ $t('ui.pages.home.description') }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 pb-xs">
        <div class="box">
          <h2>
            {{ $t('ui.pages.home.title') }} ({{ deviceType }})
          </h2>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 pb-xs">
        <div class="box">
          Col 2
        </div>
      </div>
    </div>
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
