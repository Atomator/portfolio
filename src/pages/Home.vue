<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title" id="welcomeMessage">Hello<strong class="has-text-primary">.</strong> </h1>
        <h2 class="subtitle has-text-weight-medium" style="margin-bottom: 50px;">
          I love what I do. The only problem is that I do to a little bit everything.
        </h2>
        <!-- <router-link to="/projects"> -->
          <a href="https://github.com/sentimentapp/application" id="explore-button" class="button is-primary is-large has-shadow">
            <p id="button-text" class="has-text-weight-bold">See My Current Project!</p>
          </a>
        <!-- </router-link> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

#welcomeMessage {
  font-weight: 900;
  font-size: 5.5em;

  /* Need a better way to manage the text spacing */
  margin-bottom: 50px;
}

#explore-button {
  height: 58px;
  border-radius: 10px;
  box-shadow: 0 6px 6px rgba(10, 10, 10, 0.15);
}

#button-text {
  font-size: 20px;
}

.currently {
  padding-top: 16px;
}

@media only screen and (max-width: 440px) {
  #welcomeMessage {
    font-size: 23vw !important;
  }

  #button-text {
    font-size: 5vw !important;
  }
}

</style>