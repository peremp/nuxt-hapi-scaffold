<template>
  <div class="home row">
    <div class="col-xs-12">
      <div>
        <h2>
          {{ $t('ui.pages.home.title') }} ({{ locale }}) (desktop)
        </h2>
        <ul class="mt-m">
          <li
            v-for="(item, index) in shows"
            :key="index"
          >
            {{ item.show.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moviesMixin from './mixin';

export default {
  mixins: [moviesMixin]
};
</script>

<style lang="scss" scoped>
.home {
  li {
    list-style: circle inside;
  }
}
</style>
