<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <div class="container project-header" id="main">
      <div class="columns is-vcentered">
        <div class="column is-one-half">
          <div id="main" class="pull-right">
            <h1 class="project-title">Driveline<strong class="has-text-primary">.</strong> </h1>
            <h2 class="subtitle has-text-weight-medium">
              Coding With a Group is a Lot Different
            </h2>
            <a class="button-dark" href="https://medium.com/@coloradolego/how-to-use-arkit-and-unity-to-create-6dof-mobile-vr-f03de54e2edd">
              <a class="icon">
                <img src="../../assets/media icons/medium.svg" class="logo">
              </a>
            </a>
            <a class="button-dark" href="https://medium.com/@coloradolego/how-to-use-arkit-and-unity-to-create-6dof-mobile-vr-f03de54e2edd">
              <a class="icon">
                <i class="fas fa-globe-americas fa-lg has-text-light"></i>
              </a>
              <!-- <p class="has-text-weight-bold">Explore</p> -->
            </a>
          </div>  
        </div>
        <div class="column is-one-half has-text-centered">
          <img class="is-vertical-center" src="../../assets/images/driveline-intro.png">
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-dark" style="margin-bottom: 5px;">Skills</p>
      <p class="has-text-dark" style="margin-bottom: 30px;">Javascript, HTML/CSS, Vue.js, Firebase</p>
      <p class="section-title-dark" style="margin-bottom: 5px;">Project Duration</p>
      <p class="has-text-dark">January 2019 - May 2019</p>
    </div>
   <div class="container">
    <div class="tile-column-dark is-vcentered">
      <div class="column">
        <p class="section-title-light">Why</p>
        <p class="has-text-light">At school, I was offered the opportunity in my computer science class to create a new app to help manage a local Elementary Schools drop-off and pick-up situation. The school used a pen and paper system to keep track of which students left with which person, and while this worked, the implementation was slow and made it difficult for teachers to communicate whether or not students have made it to the correct car. This was a perfect problem that could be solved by the addition of a little bit of technology and a group of students willing to work on it.</p>
      </div>
      <div class="column">
        <img src="../../assets/images/driveline-code.png" alt="driveline-code">
      </div>
    </div>
   </div>
   <div class="container">
    <p class="section-title-dark">What</p>
    <p>For context, the driveline works by having the parents first drive into the school parking lot, following a set path that allowed for them to pass by and pickup their kids before exiting back onto the street. Moving through the line the parent would reach a section in which the line would be stopped and their kid was allowed to enter into their vehicle, and once every kid as loaded the wave would be released. Teachers on duty would talk to each parent in order to get the correct kid into the correct car. </p>
    <img class="is-centered" src="../../assets/images/driveline-page.png" alt="ann-code" style="margin: 64px 0px 64px 0px; width: 50%; margin-left: auto; margin-right: auto;">
    <p class="has-text-centered" style="margin-top: -84px; margin-bottom: 64px;">Teacher View of Page</p>
    <p>Our solution would have an app that keep track of which cars are in the driveline, using a database to communicate which kids have made it to which cars. Upon a wave entering, through the use of iPads, a teacher would be responsible for registering the drivers, identifying them by the color of their vehicle. Then as teachers guide students to their respective rides, they check off which rides are filled, and once all the rides in the staging areas are full the wave is released.</p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Driveline'
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


p {
    font-size: 18px;
    line-height: 45px;
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