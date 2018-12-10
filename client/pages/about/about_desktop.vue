<template>
  <div class="content">
    <h1>{{ data.title }} ({{ locale }}) (desktop)</h1>
    <p>{{ data.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    locale: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default() {
        return {
          title: '',
          description: ''
        };
      }
    }
  }
};
</script>
