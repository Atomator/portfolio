// This file contains the code used to deploy the rest of the site

<template>
  <div id="app">
    <body class="main">
      <div>

        <!-- Navbar component -->
        <navbar class="nav"></navbar>

        <!-- This is the router view that allows for different components (pages) to be showed here -->
        <div class="section">
          <router-view id="router"/>
        </div>

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
  height: 100%;
  flex-direction: column;
}

.section {
  min-height: calc(100vh - 160px);
  flex: 1;
  padding: 0px 0px 160px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
