<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <div class="container project-header">
      <div class="columns is-vcentered">
        <div class="column is-one-half">
          <div id="main" class="pull-right">
            <h1 class="project-title">Sentiment<strong class="has-text-primary">.</strong> </h1>
            <h2 class="subtitle has-text-weight-medium">
              Machine Learning. Meet Mental Health.
            </h2>
            <!-- <a class="button-primary" href="https://www.youtube.com/watch?v=MMX9esKbbkc&list=PLCseOl6jsv2oRbhZzk3ZvgrnswPK12wim&index=6">
              <a class="icon">
                <img src="../../assets/media icons/youtube.svg" class="logo">
              </a>
            </a> -->
            <a class="button-primary" href="https://connorsparks.medium.com/ui-ux-design-for-a-micro-journaling-application-b74c9d2c8d1b">
              <a class="icon">
                <img src="../../assets/media icons/medium.svg" class="logo">
              </a>
            </a>
            <a class="button-primary" href="https://github.com/sentimentapp/application">
              <a class="icon">
                <img src="../../assets/media icons/github.svg" class="logo">
              </a>
            </a>
              <a class="button-primary" href="https://www.figma.com/file/vII04Xd1Q8r208ztIRiuIK/Sentiment-Mockup?node-id=0%3A1">
              <a class="has-text-white">
                Mockup
              </a>
            </a>
          </div>  
        </div>
        <div class="column is-one-half has-text-centered">
          <img class="is-vertical-center" src="../../assets/images/sentiment-cover.png" width="60%">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tile-centered-primary">
        <p class="title-light" style="margin-bottom: 5px;">Skills</p>
        <p class="has-text-white-ter" style="margin-bottom: 30px;">VueJS, HTML, CSS, CapacitorJS, Tensorflow/Keras</p>
        <p class="title-light" style="margin-bottom: 5px;">Project Duration</p>
        <p class="has-text-white-ter">June 2020 - December 2020</p>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Why</p>
      <br>
      <p>Throughout High School, I've had my struggles with mental health. In my battles against the forces of anxiety and depression, I've tried various weapons, but one of these tools has always stuck with me: journaling. In my life, journaling has become a way to ground myself, because writing forces the dark and ephemeral thoughts in my mind to become concrete and definable issues that I can tackle. As such, when I was offered the oppertunity to intern with the Colorado School of Mine's Computing 4 Good (C4G) program, I was able to draw upon my own personal experience to propose that my team create Sentiment: a journaling app that uses machine learning to classify the emotions of entries to help the user track their mental state.</p>
    </div>
    <div class="container">
      <div class="tile-column-dark is-vcentered">
        <div class="column has-text-centered">
          <p class="has-text-light title-light" style="margin-bottom: 25px">The Team</p>
          <p class="has-text-light">During the C4G internship, I was paired with a group of four students and as such, it was important that we figured out our group dynamic from the get-go. As a team, we split into three micro-groups, each one responsible for a different aspect of the application: UI/UX, app development, and the machine learning model. Along with heading up the UI/UX team, I also worked with the app development and machine learning groups to help complete the application. As a group we also agreed to meet three times a week to check in on our progress, using Trello as our task manager of choice.</p>
        </div>
        <div class="column">
          <img src="../../assets/images/sentiment-trello.png" alt="sentiment-trello">
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
     <p class="section-title-dark">UI/UX</p>
     <p>As the head of UI/UX design, it was mainly my job to create the mockup. My teammates would come up with ideas, and I would transform those ideas into reality. To makes these concepts real, I went through three phases of design: drafting, wireframing, and mockups</p>
     <div class="columns">
      <div class="tile-centered-dark column steps">
        <p class="has-text-light is-size-4">Drafting</p>
      </div>
      <div class="tile-centered-dark column steps">
        <p class="has-text-light is-size-4">Wireframing</p>
      </div>
      <div class="tile-centered-dark column steps">
        <p class="has-text-light is-size-4">Mockups</p>
      </div>
    </div>
    <p></p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'sentiment'
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

.container {
  margin-bottom: 128px;
}

.is-centered {
  display: flex !important;
  margin-left: auto;
  margin-right: auto;
  /* width: 40%; */
}


p {
  font-size: 18px;
  line-height: 45px;
}

.steps {
  margin: 64px;
  padding: 16px;
  border-radius: 16px;
  font-size: 32px;
}

@media only screen and (min-width: 768px) {

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