// This file contains the code used to deploy the rest of the site

<template>
  <div id="app">
    <body class="main">
      <div class="section">

        <!-- Navbar component -->
        <navbar></navbar>

        <!-- This is the router view that allows for different components (pages) to be showed here -->
        <router-view/>

      </div>

      <!-- Footer component -->
      <bottom-footer class="footer"></bottom-footer>
   </body>
  </div>
</template>

<script scoped>
  import Navbar from './components/Navbar.vue'
  import BottomFooter from './components/BottomFooter.vue'

  export default {
    name: 'App',
    components: { Navbar, BottomFooter }
  }
</script>

<style scoped>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.section {
  flex: 1;
  padding: 0;
}
</style>
