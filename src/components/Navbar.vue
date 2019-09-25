<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" v-for="(value, key) in pages" v-bind:key="value.id">
              <router-link :to="value">
                <a class="menu-item has-text-weight-bold has-text-dark"> {{ key }} </a>
              </router-link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar', 
  data () {
    return {
      currentPage: '',
      pages: {
        'Home': 'home',
        'Other': 'other',
      }
    }
  },
  created: function () {
    this.currentPage = this.$router.currentRoute.fullPath;
  },
}
</script>

<style>

.menu-item {
  font-size: 1.5rem;
}

.menu {
}

</style>