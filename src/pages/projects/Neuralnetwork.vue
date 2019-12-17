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
      <img src="../../assets/images/neuralnetwork-code.png" alt="ann-code" style="margin-bottom: 100px;">
      <div class="tile-column-primary">
        <div class="column has-text-centered">
          <p class="section-title-light">What</p>
          <p class="has-text-white-ter">In terms of the idea, this project was extremely simple compared to some of the other projects I have worked on, but its execution proved to be more difficult. The goal was that by using only Numpy and Python within a Google Colab Notebook, I was going to create an ANN that was capable of recognizing hand-written digits from the MNIST dataset. Doing this would allow for me to get a better idea of how the math behind an ANN works so I can build more complex machine learning projects later. </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns has-text-centered">
        <div class="column is-half" style="padding: 30px;">
          <p class="section-title-primary">Idea</p>
          <p>Using the mathematical equations provided by the Coursera Machine Learning Course, implement gradient descent. </p>
        </div>
        <div class="column is-half" style="padding: 30px;">
          <p class="section-title-primary">Goal</p>
          <p>Create an ANN using only Numpy and Python that can identify hand-written digits from the MNIST dataset at 90% or greater accuracy. </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-primary has-text-white-ter" style="font-size: 20px; font-weight: 900; border-radius: 10px; padding: 0px 30px 0px 30px;">Start</span>
        </header>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Managing Data</p>
            <p>Before I could start training of the network I needed to find an MNIST dataset that I could import as a Numpy array, which I was quickly able to locate on Github.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">Learning</p>
            <p>At this point I sat down with the math that I needed and began to code it using the matrix functions provided by Numpy. However, even after hours of training I only hit an accuracy of 30%.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Stackoverflow</p>
            <p>After working for a couple of hours to improve accuracy, I was out of ideas on what to do, so, I turned to Stackoverflow for help. It turned out that I has simply failed to add a bias unit to my data, and upon doing this accuracy shot up to 92%.</p>
          </div>
        </div>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">Cosmetic Changes</p>
            <p>In my mind, I considered this working, but I wanted to make some improvements. As seen in the notebook, I added user input to allow for them to change the number of nodes, along with a visualization tool so they can see the layers.</p>
          </div>
        </div>
        <header class="timeline-header" style="margin-bottom: 100px;">
          <span class="tag is-medium is-primary has-text-white-ter" style="font-size: 20px; font-weight: 900; border-radius: 10px; padding: 0px 30px 0px 30px;">End</span>
        </header>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-primary">Challenges</p>
      <br>
      <p class="text-fit">Compared to the other projects within this portfolio, it was rather short, but I do think that I learned a lot from it. This is the project that primarily got me interested in machine learning as a field, and helped me to remember why I actually like math in the first place. Someday I would like to revisit this project and attempt to get the accuracy even higher by trying to do things like adding more layers, or changing the activation function to something like ReLu. But, in the end, even though this project is short, I think that the code mostly speaks for itself, showing what I have done with the subject and where I would like to go.</p>
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