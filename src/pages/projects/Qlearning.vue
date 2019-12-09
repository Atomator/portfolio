<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <div class="container project-header">
      <div class="columns">
        <div class="column is-one-half">
          <div id="main" class="pull-right">
            <h1 class="project-title">Qlearning<strong class="has-text-primary">.</strong> </h1>
            <h2 class="subtitle has-text-weight-medium">
              Teaching My Computer to Beat Me at Snake
            </h2>
            <a class="button-primary" href="https://github.com/Atomator/VRKit">
              <a class="icon">
                <img src="../../assets/media icons/github.svg" class="logo">
              </a>
              <!-- <p class="has-text-weight-bold">Explore</p> -->
            </a>
            <a class="button-primary" href="https://medium.com/@coloradolego/how-to-use-arkit-and-unity-to-create-6dof-mobile-vr-f03de54e2edd">
              <a class="icon">
                <img src="../../assets/media icons/medium.svg" class="logo">
              </a>
              <!-- <p class="has-text-weight-bold">Explore</p> -->
            </a>
          </div>  
        </div>
        <div class="column is-one-half has-text-centered">
          <img class="is-vertical-center" src="../../assets/images/qlearning-practice.png" width="750">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qlearning'
}
</script>

<style scoped>
@import '../../assets/css/projects.css';

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

.is-centered > img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
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
}

@media only screen and (max-width: 768px) {
  #main {
    text-align: center;
  }
  
  .button {
    margin: 35px 18px 35px 18px;
  }
}

</style>