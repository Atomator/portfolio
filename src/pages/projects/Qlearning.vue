<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <div class="container project-header">
      <div class="columns is-vcentered">
        <div class="column is-one-half ">
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
            <a class="button-primary" href="https://medium.com/@coloradolego/how-to-use-arkit-and-unity-to-create-6dof-mobile-vr-f03de54e2edd">
              <a class="icon">
                <img src="../../assets/media icons/youtube.svg" class="logo">
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
    <div class="container">
      <div class="tile-centered-primary">
        <p class="title-light" style="margin-bottom: 5px;">Skills</p>
        <p class="has-text-white-ter" style="margin-bottom: 30px;">Python, Pygame, Numpy</p>
        <p class="title-light" style="margin-bottom: 5px;">Project Duration</p>
        <p class="has-text-white-ter">Feburary 2019 - March 2019</p>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Why</p>
      <br>
      <p>When most people see a cool looking vehicle they wish they could get in it; so like any developer, I jumped onto the machine learning hype train. While I wished I had the resources and skills to teach a computer to drive a car or control a robot, there is something else I could do, and so, I taught it to play snake.</p>
    </div>
    <div class="container has-text-centered">
      <img src="../../assets/images/qlearning-code.png" alt="qlearning-code">
      <p>While the concept behind this project wasn’t too complicated compared to my attempt to merge ARKit and GVR, it ended up taking just as much effort. While I had some introductory knowledge of machine learning algorithms and concepts, thanks to Coursera's Machine Learning Course, I had no idea how to truly use any of it. My rudimentary knowledge of the subject made it all the harder to get my computer to actually learn snake, but in the end, it made it all the more rewarding.</p>
      <br>
      <p>My original plan was to use a neural network that learned from my play style in order to teach the machine how to play the game. This idea mainly stemmed from the fact that I had created a neural network before and I though I could just use that code in order to have it learn rather than trying to create something new or even dip my toes into a more robust solution like Tensorflow or Pytorch. However, attempting this solution soon had me realize that using an ANN with my knowledge wasn’t going to cut it, and so I turned to the internet and learned about a glorious algorithm known as qLearning.</p>
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