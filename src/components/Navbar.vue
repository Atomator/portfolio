<template>
  <div id="app">
    <nav class="level m-xl">
      <div class="level-right" v-for="(value, key) in pages" v-bind:key="value.id">
        <div class="level-item">
          <router-link :to="value"><p class="menuItem has-text-weight-bold has-text-dark subtitle">{{ key }}</p></router-link>
        </div>
      </div>
      <div class="level-left">
        <div class="level-item">
          <p>The Verge</p>
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

.menuItem {
  /* color: #465362; */
}

</style>