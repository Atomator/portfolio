<template>
<!-- Basic app page to sit on the site for now -->
  <div id="app">
    <div class="container project-header" id="main">
      <div class="columns is-vcentered">
        <div class="column is-one-half">
          <div id="main" class="pull-right">
            <h1 class="project-title">Neural<br>Network<strong class="has-text-primary">.</strong> </h1>
            <h2 class="subtitle has-text-weight-medium">
              Learning About Machine Learning From The Beginning
            </h2>
            <a class="button-primary" href="https://github.com/Atomator/VRKit">
              <a class="icon">
                <img src="../../assets/media icons/github.svg" class="logo">
              </a>
            </a>
            <a class="button-primary" href="https://medium.com/@coloradolego/how-to-use-arkit-and-unity-to-create-6dof-mobile-vr-f03de54e2edd">
              <a class="icon">
                <img src="../../assets/media icons/medium.svg" class="logo">
              </a>
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
          <img class="is-vertical-center" src="../../assets/media icons/neuralnetwork-icon.svg" width="85%" style="padding: 32px;">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tile-centered-primary">
        <p class="title-light" style="margin-bottom: 5px;">Skills</p>
        <p class="has-text-white-ter" style="margin-bottom: 30px;">Python, Numpy, Matplotlib</p>
        <p class="title-light" style="margin-bottom: 5px;">Project Duration</p>
        <p class="has-text-white-ter">March 2019</p>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Why</p>
      <br>
      <p>Machine learning has quickly emerged to be one of the common techno-buzzwords of this era, and as such I decided to check it out. Working through the Coursera Machine Learning Course, I found myself interested in exploring the field further; so I created an ANN using nothing but Python and Numpy.</p>
    </div>
    <div class="container has-text-centered">
      <div class="tile-column-dark">
        <div class="column is-half is-centered">
          <img class="is-vertical-center" src="../../assets/images/neuralnetwork-intro.png" width="300" style="padding-left: 15px; margin-bottom: 15px;">
        </div>
        <div class="column is-half">
          <p class="has-text-light title-light" style="font-size: 50px !important; margin-bottom: 25px">What</p>
          <p class="has-text-white-ter has-text-left">In terms of the idea, this project was extremely simple compared to some of the other projects I have worked on, but its execution proved to be more difficult. The goal was that by using only Numpy and Python within a Google Colab Notebook, I was going to create an ANN that was capable of recognizing hand-written digits from the MNIST dataset. Doing this would allow for me to get a better idea of how the math behind an ANN works so I can build more complex machine learning projects later. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Neuralnetwork'
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