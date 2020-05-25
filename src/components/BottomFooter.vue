<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-centered is-vcentered is-mobile">
        <div class="column is-narrow has-text-centered">
          <p class="has-text-light has-text-weight-semibold">Improving my code; one day at a time</p>
          <div class="icon-container">
            <a class="icon">
              <img src="../assets/media icons/dribbble.svg" class="logo">
            </a>
            <a class="icon">
              <img src="../assets/media icons/github.svg" class="logo">
            </a>
            <a class="icon">
              <img src="../assets/media icons/medium.svg" class="logo">
            </a>
            <!-- <a class="icon">
              <img src="../assets/media icons/linkedin.svg" class="logo">
            </a> -->
          </div>
          <p class="has-text-light">Conner Stark</p>
          <p class="has-text-light">© twentyTwenty </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BottomFooter'
}
</script>

<style scoped>

.footer {
  height: 256px;
}

.icon-container {
  margin-top: 32px;
  margin-bottom: 32px;
}

.icon {
  margin-right: 32px;
  margin-left: 32px;
}

</style>