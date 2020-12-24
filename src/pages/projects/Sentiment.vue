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
     <p class="section-title-primary">UI/UX</p>
     <p>As the head of UI/UX design, it was mainly my job to create the mockup. My teammates would come up with ideas, and I would transform those ideas into reality. To makes these concepts real, we went through three phases of design: drafting, wireframing, and mockups</p>
     <div class="columns">
      <div class="tile-centered-dark column ui-steps">
        <p class="has-text-light is-size-5">Drafting</p>
      </div>
      <div class="tile-centered-dark column ui-steps">
        <p class="has-text-light is-size-5">Wireframing</p>
      </div>
      <div class="tile-centered-dark column ui-steps">
        <p class="has-text-light is-size-5">Mockups</p>
      </div>
    </div>
    <p class="has-text-primary title-primary" style="margin-top: 64px; margin-bottom: 16px;">Drafting</p>
    <p>In the drafting phase of the project, the goal was to answer one simple question: how should design promote function? Or, in other words, how can the design of the application help fulfill its purpose of helping the user manage their mental health? So with question in mind, the group proceeded to come up with the following list of requirements for the app's design.</p>
    <div class="tile-centered-primary list-tile">
      <ul class="has-text-white">
        <p>• Calm colors to encourage reflection</p>
        <p>• Adding entries is at the forefront of the design</p>
        <p>• Provide a simply summary of feelings</p>
        <p>• Minimal design to create a relaxing environment</p>
      </ul>
    </div>
    <p class="has-text-primary title-primary" style="margin-top: 128px; margin-bottom: 16px;">Wireframing</p>
    <p>In the wireframing step of the design process the goal is to create basic drafts of what the design could look like. These frames have litte to no color, and lack any specific design details. A wireframe is really just meant to give an idea of what the spacing of elements should look like before any additional elements are added.  Below are images of the wireframes that were created by two of my team memembers; much of my final design was based off of their work.</p>
    <div class="columns" style="margin-top: 32px;">
      <div class="column">
        <img class="is-vertical-center" src="../../assets/images/sentiment-wireframe-1.jpg" width="100%">
      </div>
      <div class="column">
        <img class="is-vertical-center" src="../../assets/images/sentiment-wireframe-2.jpg" width="40%">
      </div>
    </div>
    <p class="has-text-primary title-primary" style="margin-top: 128px; margin-bottom: 16px;">Mockups</p>
    <p>After the wireframes were complete, it became my job to construct a mockup for the application. Unlike a wireframe, a mockup includes all of the colors and stylistic details that are going to be present in the final application. Using a tool called Figma, I created the design for the app using the wireframes made by other team members.</p>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1); height: 512px; margin-top: 32px;" width="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvII04Xd1Q8r208ztIRiuIK%2FSentiment-Mockup%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
   </div>
   <div class="container has-text-centered">
    <p class="section-title-primary">Application</p>
    <p>In order to develop our application, the group choose to use CapacitorJS. Similar to ElectronJS, Capacitor allows for mobile applications to be built using nothing but HTML and CSS. While this choice of development platform meant that our application would run slower than if we wrote it natively, it did mean that we would be able to develop our application faster since nobody on our team had ever written a mobile application before.</p>
    <br>
    <p>Though I was not originally a part of the application development group, I quickly became invested in developing the actual version of the app. With another group memeber handling the backend portion of the app, I was responsible for making sure that the UI/UX mockup that I created was actually reflected in the final product. Check out the video below to see it!</p>
    <br>
    <p>(Note: The video below shows the application before the machine learning model was integrated)</p>
    <br>
    <a class="button-primary" style="margin: 0px 16px 0px 16px !important" href="https://www.youtube.com/watch?v=MMX9esKbbkc&list=PLCseOl6jsv2oRbhZzk3ZvgrnswPK12wim&index=6">
     <a class="icon">
        <img src="../../assets/media icons/youtube.svg" class="logo">
      </a>
      <a class="has-text-white" style="margin-left: 16px">
        Demo
      </a>
    </a>
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
}


p {
  font-size: 18px;
  line-height: 45px;
}

.ui-steps {
  margin: 64px 64px 64px 64px;
  padding: 8px;
  border-radius: 16px;
}

.list-tile{
  margin-top: 32px;
  width: 50%;
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

  ul > p {
    font-size: 12px;
  }

.list-tile{
  width: 100%;
}

}

</style>