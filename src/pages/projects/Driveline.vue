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
            <a class="button-dark" href="https://stem-k12-drive-line.firebaseapp.com">
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
      <p class="section-title-dark" style="margin-bottom: 5px;">Duration</p>
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
   <div class="container has-text-centered">
    <div class="tile-column-dark">
      <div class="column has-text-centered">
        <p class="title-light">Goal</p>
        <p class="has-text-white-ter">To work with a team in order to create an application that helps to speed up Elementary School pickup by allowing easier communication between teachers.</p>
        <p class="title-light" style="margin-top: 64px;">Idea</p>
        <p class="has-text-white-ter">To use a real-time data base in order to update a webpage that informs teacher whether or not a student has reached the correct ride.</p>
      </div>
    </div>
   </div>
    <div class="container has-text-centered">
      <p class="section-title-dark">Creation</p>
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-dark has-text-white-ter" style="font-size: 20px; font-weight: 900; border-radius: 10px; padding: 0px 30px 0px 30px; margin-top: 128px;">Start</span>
        </header>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Logging In</p>
            <p>As an introduction to the start of the project each member of the group was tasked with adding user authentication (using Firebase) to the site in their own git branch; with the best code being merged into master. Using Bootstrap 4, I was able to spice up the look of the look up my page, and as such, my code got merged.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Tussling with Data</p>
            <p>Having not used a database before I had figure out how to relate different data points in order to have students be registered with drivers and vice-versa. Vuex allowed for me to manage the data state when pushing and fetching data from Firebase.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Hold Please!</p>
            <p>To keep track of cars that needed to be pulled aside, I had to create a new Vuex manager from scratch. This helped me to become better aquatinted with the database technologies while also getting better at using Vue, as I had to use v-for and v-if statements to display the data properly.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Time</p>
            <p>To track the gameplay, I created an array that would keep track of snake direction, distance from apple, what side the apple was on, and what keys were being pressed.</p>
          </div>
        </div>
        <header class="timeline-header" style="margin-bottom: 100px;">
          <span class="tag is-medium is-dark has-text-white-ter" style="font-size: 20px; font-weight: 900; border-radius: 10px; padding: 0px 30px 0px 30px;">End</span>
        </header>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-dark">Challenges</p>
      <br>
      <p>Due to the fact that I had to work with a group this was a much different project than I was used to. Working with a group proved to be much different than anything that I had attempted before, as I had to coordinate with, and help others, when it came to making the site a working web application. However, I am thankful for this experience, as I was able to learn how to help other in a respectful and kind way while also soliciting the same type of assistance from others. Being able to sit down with a new group of people and walk out with a finished product is an experience that will not only help me in the work force, but be an experience that I will never forget.</p>
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