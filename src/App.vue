<template lang="html">
  <div id="app">
    <div class="container-scroller">
      <app-header v-if="showMenu"/>
      <div class="container-fluid page-body-wrapper">
        <!-- <app-sidebar v-if="showMenu"/> -->
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <app-footer/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import AppHeader from '../src/components/partials/AppHeader'
import AppSidebar from '../src/components/partials/AppSidebar'
import AppFooter from '../src/components/partials/AppFooter'
export default{
  name: 'main',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  },
  computed: {
    showMenu () {
      return this.$route.name !== 'login' && this.$route.name !== 'register'
    }
  }
}
</script>

<style>
  @import "../node_modules/mdi/css/materialdesignicons.min.css";
  @import "../node_modules/flag-icon-css/css/flag-icon.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>

<style lang="scss">
@import "./assets/scss/style";
.main-panel {
    width: calc(100% - 0px);
}
a:hover {
    color: #0c0c0c;
    text-decoration: underline;
}
a{
  color: #000000;
}
</style>
