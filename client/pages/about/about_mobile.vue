<template>
  <div class="content">
    <h1>{{ data.title }}  ({{ locale }}) (mobile)</h1>
    <p>{{ data.description }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          title: '',
          description: ''
        };
      }
    }
  },
  computed: mapState(['locale'])
};
</script>
