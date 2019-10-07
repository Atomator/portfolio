<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a id="logo" class="navbar-item" href="https://bulma.io" >
            <img src="../assets/mylogo.svg" width="40" height="64">
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
                <a class="has-text-weight-bold has-text-dark is-size-5"> {{ key }} </a>
                <div class="navlink-current" v-if="currentPage == value"></div>
                <div class="navlink-unselected" v-else></div>
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
        'Home': '/',
        'Projects': '/projects',
        'About': '/about',
      }
    }
  },
  created: function () {
    this.currentPage = this.$router.currentRoute.fullPath;
  },
  watch: {
    $route (to){
      this.currentPage = to.fullPath;
    }
  }
}
</script>

<style scoped>

.navlink-current {
  margin-top: -10px;
  height: 3px;
  background-color: #71A9F7;
  border-radius: 2px;
}

.navlink-unselected {
  margin-top: -11px;
  height: 4px;
}

@media only screen and (max-width: 1024px) {
  #logo{
    margin-left: 25px;
  }
  
  .burger {
    height: 10rem;
    width: 5rem;
    margin-right: 25px;
  }
}

</style>