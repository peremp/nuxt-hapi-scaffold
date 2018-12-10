<template>
  <ul class="main-menu">
    <li class="main-menu__item">
      <nuxt-link
        to="/"
        class="main-menu__link"
      >
        {{ $t("ui.nav.home") }}
      </nuxt-link>
    </li>
    <li class="main-menu__item">
      <nuxt-link
        to="/about"
        class="main-menu__link"
      >
        {{ $t("ui.nav.about") }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'CustomIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.main-menu {
  & {
    list-style: none;
    margin: 0;
    padding: 0;
    background: $color-grey-light;
  }

  &__item {
    display: inline-block;
    border-right: 1px solid $color-grey;
  }

  &__link {
    display: block;
    padding: 2rem;
  }
}
</style>
