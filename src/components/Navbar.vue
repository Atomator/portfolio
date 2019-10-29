<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a id="logo" class="navbar-item" href="https://bulma.io" >
            <img src="../assets/mylogo.svg" width="40" height="64">
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <router-link @click.native="showNav = false" class="navbar-item" v-for="(value, key) in pages" v-bind:key="value.id" :to="value">
                <a class="test has-text-dark is-size-5" :class="{ 'has-text-weight-medium': showNav, 'has-text-weight-bold': !showNav, 'navlink-mobile': (showNav == true && currentPage == value)}"> 
                  {{ key }} 
                  <div :class="{'navlink-current': (currentPage == value && showNav == false), 'navlink-unselected': (currentPage != value && showNav == false)}"></div>
                </a>
            </router-link>
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
      showNav: false,
      currentPage: '',
      pages: {
        'Home': '/',
        'Projects': '/projects',
        'About': '/about',
        'Contact': '/contact',
        'Resume': '/resume'
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

.navlink-mobile {
  padding: 0 0px px;
  box-shadow: 0 10px 0 0 rgba(255,56,96,0), inset 0 -0.125em #71A9F7;
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