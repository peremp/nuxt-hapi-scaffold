<template>
  <div>
    <div class="row mb-m">
      <div class="col-xs-12">
        <p class="box">
          {{ $t('ui.pages.movies.description') }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <h2>
            {{ $t('ui.pages.movies.title') }} ({{ locale }}) (desktop)
          </h2>
          <ul>
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
  </div>
</template>

<script>
import moviesMixin from './movies-mixin';

export default {
  mixins: [moviesMixin]
};
</script>
