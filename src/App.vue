<template>
  <div id="app">
    <router-link to="/"><button class = 'button is-primary'>Welcome</button></router-link>
    <router-link to="/other"><button class = 'button is-link'>Other</button></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
