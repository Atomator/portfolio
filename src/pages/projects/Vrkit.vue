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
      <div class="columns work-column">
        <div id="skils-column" class="column">
          <div class="row">
            <h1 class="has-text-weight-bold">Project Duration</h1>
            <p>June 2019 - August 2019</p>
          </div>
          <div class="row">
            <h1 class="has-text-weight-bold">Team</h1>
            <p>Just Me :)</p>
          </div>
          <div class="row">
            <h1 class="has-text-weight-bold">Skills</h1>
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
        <div class="column">
          <h1 class="title-card">Why</h1>
          <p>Virtual Reality captured my interest ever since I donned my first Oculus Rift at a Best Buy over 4 years ago. The experience captivated me and the technology fascinated me, but sadly, my wallet disappointed me. Unable to afford a headset (let alone a PC to drive it). <br> <br> I needed another solution if I was to explore the wonders of VR. </p>
        </div>
      </div>
    </div>
    <div class="container work-content has-background-dark is-fullhd is-widescreen">
      <section class="hero is-dark is-fullheight">
        <div class="hero-body">
          <div class="container">
            <h1 class="title-card has-text-light">
              What
            </h1>
            <p>Compared to other VR solutions there were two main obstacles for mobile headsets: positional tracking and game controllers. High-end headsets such as the Oculus Rift or HTC Vive offered the user the ability to not only walk around in a virtual environment, but interact with it by tracking controllers that represented the user’s hands. Based on my previous knowledge it was unlikely I would be able to track three-dimensional objects using a limited smartphone camera, but I could track the phone’s position.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vrkit'
}
</script>

<style scoped>
.work-content {

}

.title-card {
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 10px;
}

.row p {
  font-size: 16px; 
  padding-top: 5px; 
  padding-left: 25px;
  width: 55%;
}

.column {
  padding: 0px 35px 0px 35px;
}

.row h1 {
  text-align: right;
  font-size: 20px;
  width: 45%;
}

.work-column {
  flex-direction: row-reverse;
}

.row {
  display: flex;
  margin-bottom: 15px;
}

.work-skills {
  position: relative;
  display: flex;
  flex-direction: column;
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

  #skils-column {
    padding-top: 70px;
  }

  .container {
    margin-bottom: 200px;
  }

  .work-header {
    padding-top: 50px;
    margin-bottom: 100px;
    min-height: calc(100vh - 100px);
  }

}

@media only screen and (max-width: 768px) {
  #main {
    text-align: center;
  }

  #app {
    padding: 0px 10px 0px 10px;
  }

  .button {
    margin: 35px 18px 0px 18px;
  }

  .work-header {
    margin: 50px;
  }

}

</style>