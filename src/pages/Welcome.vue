<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <section class="section">
      <div class="container has-text-centered">
        <h1 class = "title" id="welcomeMessage">Hello<strong class="has-text-primary">.</strong> </h1>
        <h2 class="subtitle">
          While there isn't anything here <strong>now</strong>, there will be soon
        </h2>
        <a class="button is-primary" href="https://xd.adobe.com/view/456fbad4-cc7a-4839-6436-7d5ff64d301b-335e/?fullscreen">View the Demo</a>
      </div>
    </section>
  </div>
</template>

<script>export default {
  name: 'Welcome'
}
</script>

<style>

#welcomeMessage {
  font-weight: 900;
  font-size: 5em;

  /* Need a better way to manage the text spacing */
  margin-top: 1em;
  margin-bottom: 1em;
}

</style>