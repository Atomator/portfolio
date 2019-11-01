<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <div class="container work-header">
      <div class="columns">
        <div class="column is-one-half">
          <div id="main" class="container pull-right">
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
            <a class="button is-primary is-large has-shadow" href="https://medium.com/@coloradolego/how-to-use-arkit-and-unity-to-create-6dof-mobile-vr-f03de54e2edd">
              <a class="icon">
                <img src="../../assets/media icons/medium.svg" class="logo">
              </a>
              <!-- <p class="has-text-weight-bold">Explore</p> -->
            </a>
            <!-- <a class="button is-primary is-large has-shadow" href="https://github.com/Atomator/VRKit">
              <p class="has-text-weight-bold">Demo</p>
            </a> -->
          </div>  
        </div>
        <div class="column is-one-half has-text-centered">
          <img class="is-vertical-center" src="../../assets/plank.svg" width="350">
        </div>
      </div>
    </div>
    <div class="container work-skills">
      <div class="columns is-right">
        <div class="column">
          <div class="row">
            <p class="has-text-weight-bold">Skills:</p>
            <p>
              Unity
              <br>
              C#
              <br>
              Blender
              <br>
              ARKit
              <br>
              Google Cardboard
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vrkit'
}
</script>

<style scoped>
.row {
  display: flex;
}

.work-header {
  padding-top: 50px;
  margin-bottom: 100px;
  min-height: calc(100vh - 150px);
}

p {
  font-size: 20px;
}

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

  .pull-right {
    float: right;
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