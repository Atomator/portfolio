// This file contains the code used to deploy the rest of the site

<template>
  <div id="app">

    <!-- Navbar component -->
    <navbar></navbar>

    <!-- This is the router view that allows for different components (pages) to be showed here -->
    <router-view/>

  </div>
</template>

<script scoped>
  import Navbar from './components/Navbar.vue'

  export default {
    name: 'App',
    components: { Navbar },
  }
</script>
