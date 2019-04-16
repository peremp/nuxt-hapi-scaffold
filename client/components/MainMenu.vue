<template>
  <div class="main-menu">
    <div class="wrap container-fluid">
      <div class="row">
        <nuxt-link
          to="/"
          class="main-menu__link pv-m ph-s"
        >
          {{ $t("ui.nav.home") }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
    background: #e8e8e8;
  }

  &__link {
    & {
      display: block;
      border-right: 1px solid #CCC;
    }

    &:first-child {
      border-left: 1px solid #CCC;
    }
  }
}
</style>
