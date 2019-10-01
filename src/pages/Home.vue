<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <section class="section">
      <div class="container has-text-centered">
        <h1 class = "title" id="welcomeMessage">Hello<strong class="has-text-primary">.</strong> </h1>
        <h2 class="subtitle has-text-weight-medium" style="margin-bottom: 50px;">
          I love what I do even if I'm not sure what that is
        </h2>
        <a id="explore-button" class="button is-primary is-large has-shadow" href="https://xd.adobe.com/view/456fbad4-cc7a-4839-6436-7d5ff64d301b-335e/?fullscreen">
          <p id="button-text" class="has-text-weight-bold">Explore</p>
        </a>
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
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 6px 6px rgba(10, 10, 10, 0.15);
}

#button-text {
  font-size: 20px;
}

</style>