<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <section class="section">
      <div class="columns">
        <div class="column is-one-half">
          <div id="main" class="container">
            <h1 class="title" id="welcomeMessage">VRKit<strong class="has-text-primary">.</strong> </h1>
            <h2 class="subtitle has-text-weight-medium" style="margin-bottom: 50px;">
              Google Cardboard Meets Positional Tracking
            </h2>
            <a class="button is-primary is-large has-shadow" href="https://github.com/Atomator/VRKit">
              <a class="icon">
                <img src="../../assets/media icons/github.svg" class="logo">
              </a>
              <!-- <p class="has-text-weight-bold">Explore</p> -->
            </a>
            <a class="button is-primary is-large has-shadow" href="https://github.com/Atomator/VRKit">
              <a class="icon">
                <img src="../../assets/media icons/medium.svg" class="logo">
              </a>
              <!-- <p class="has-text-weight-bold">Explore</p> -->
            </a>
            <a class="button is-primary is-large has-shadow" href="https://github.com/Atomator/VRKit">
              <p class="has-text-weight-bold">Demo</p>
            </a>
          </div>  
        </div>
        <div class="column is-one-half">
          <img class="is-vertical-center" src="../../assets/plank.svg" width="500">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Vrkit'
}
</script>

<style scoped>

#welcomeMessage {
  font-weight: 900;
  font-size: 5.5em;

  /* Need a better way to manage the text spacing */
  margin-bottom: 50px;
}

.button {
  padding: 30px 35px 30px 35px;
  margin-right: 36px;
  margin-bottom: 35px;
  border-radius: 10px;
  box-shadow: 0 6px 6px rgba(10, 10, 10, 0.15);
}

#main {
  margin-bottom: 75px;
}

@media only screen and (min-width: 768px) {
  #main {
    margin-top: 150px;
  }
}

@media only screen and (max-width: 768px) {
  #main {
    text-align: center;
  }

  .button {
    margin: 35px 18px 0px 18px;
  }
}

</style>