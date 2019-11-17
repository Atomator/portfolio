<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <div class="container work-header">
      <div class="columns">
        <div class="column is-one-half">
          <div id="main" class="pull-right">
            <h1 class="title" id="welcomeMessage">VRKit<strong class="has-text-primary">.</strong> </h1>
            <h2 class="subtitle has-text-weight-medium" style="margin-bottom: 25px;">
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
    <div class="container">
      <div class="tile-centered-primary">
        <p class="title-light" style="margin-bottom: 5px;">Skills</p>
        <p class="has-text-white-ter" style="margin-bottom: 30px;">Unity, C#, Blender, ARKit, Google Cardboard</p>
        <p class="title-light" style="margin-bottom: 5px;">Project Duration</p>
        <p class="has-text-white-ter">June 2019 - August 2019</p>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Why</p>
      <p style="width: 75vw;">Virtual Reality captured my interest ever since I donned my first Oculus Rift at a Best Buy over 4 years ago. The experience captivated me and the technology fascinated me, but sadly, my wallet disappointed me. Unable to afford a headset (let alone a PC to drive it). <br><br> I needed another solution if I was to explore the wonders of VR. </p>
    </div>
    <div class="container has-text-centered">
      <div class="tile-column-dark">
        <div class="column is-half">
          <p class="has-text-light">Thesdkjfh</p>
        </div>
        <div class="column is-half">
          <p class="has-text-light">Thesdkjfh</p>
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
@import '../../assets/css/projects.css';

p {
  font-size: 18px;
  line-height: 45px;
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

.container {
  margin-bottom: 100px;
}

@media only screen and (min-width: 768px) {
  #main {
    margin-top: 150px;
  }

  .pull-right {
    float: right;
  }

  .container {
    margin-bottom: 128px;
  }

  .work-header {
    padding-top: 50px;
    min-height: calc(100vh - 100px);
  }

}

@media only screen and (max-width: 768px) {
  #main {
    text-align: center;
  }
  
  .button {
    margin: 35px 18px 35px 18px;
  }

  .work-header {
    padding: 15px;
  }
}

</style>