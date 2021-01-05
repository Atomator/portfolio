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
            <a class="button-dark" href="https://repl.it/@ConnerStark/QLearning#main.py">
              <a class="has-text-white">
                Try It!
              </a>
            </a>
            <a class="button-dark" href="https://github.com/Atomator/Q-Learning-Snake">
              <a class="icon">
                <img src="../../assets/media icons/github.svg" class="logo">
              </a>
            </a>
          </div>  
        </div>
        <div class="column is-one-half has-text-centered">
          <img class="is-vertical-center" src="../../assets/images/qlearning-practice.png" width="85%">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tile-centered-dark">
        <p class="title-light" style="margin-bottom: 5px;">Skills</p>
        <p class="has-text-white-ter" style="margin-bottom: 30px;">Python, Pygame, Numpy</p>
        <p class="title-light" style="margin-bottom: 5px;">Project Duration</p>
        <p class="has-text-white-ter">March 2019 - April 2019</p>
      </div>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-dark">Why</p>
      <br>
      <p>When most people see a cool looking vehicle they wish they could get in it; so like any developer, I jumped onto the machine learning hype train. While I wished I had the resources and skills to teach a computer to drive a car or control a robot, there is something else I could do, and so, I taught it to play snake.</p>
    </div>
    <div class="container has-text-centered">
      <img src="../../assets/images/qlearning-code.png" alt="qlearning-code">
      <p>While the concept behind this project wasn’t too complicated compared to my attempt to merge ARKit and GVR, it ended up taking just as much effort. While I had some introductory knowledge of machine learning algorithms and concepts, thanks to Coursera's Machine Learning Course, I had no idea how to truly use any of it. My rudimentary knowledge of the subject made it all the harder to get my computer to actually learn snake, but in the end, it made it all the more rewarding.</p>
      <br>
      <p>My original plan was to use a neural network that learned from my play style in order to teach the machine how to play the game. This idea mainly stemmed from the fact that I had created a neural network before and I thought using that code would be easier than trying to create something new or even dip my toes into a more robust solution like Tensorflow or Pytorch. However, attempting this solution soon had me realize that using an ANN with my knowledge wasn’t going to cut it, and so I turned to the internet and learned about a glorious algorithm known as qLearning.</p>
    </div>
    <div class="container has-text-centered">
      <p class="section-title-dark">Creation</p>
      <div class="tile-column-dark">
        <div class="column is-half is-centered" style="padding: 50px;">
          <p class="has-text-light title-light">Idea</p>
          <p class="has-text-light">To create a program that allows for my computer to learn how to play the game of snake at level that is equal to or better than my own.</p>
        </div>
        <div class="column is-half" style="padding: 50px;">
          <p class="has-text-light title-light">Goal</p>
          <p class="has-text-light">Using a qLearning table, the computer will slowly be able to learn the correct actions to perform at the appropriate time in the computer game of snake.</p>
        </div>
      </div>
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-dark has-text-white-ter" style="font-size: 20px; font-weight: 900; border-radius: 10px; padding: 0px 30px 0px 30px; margin-top: 128px;">Start</span>
        </header>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Idea</p>
            <p>The first idea that I had actually involved using an ANN that would learn from my play style to get better at the game.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Creating the Game</p>
            <p>While this was one of the longest parts of the process, in reality it was one of the simplest. All I had to do was use an array to store the locations of the snake than output them on a screen.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Finishing the Game</p>
            <p>Then, I added collision rules so the snake could eat apples, get longer, and die when it overlapped itself.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Tracking Gameplay</p>
            <p>To track the gameplay, I created an array that would keep track of snake direction, distance from apple, what side the apple was on, and what keys were being pressed.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Stochastic Gradient Descent</p>
            <p>In order to train my computer to play snake, I tried to passing each second of gameplay to the machine learning algorithm. This only resulted in the snake continuing in a straight line after around half an hour of training.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Batch Gradient Descent</p>
            <p>I then tried to pass through the end of each gameplay session to the ANN which resulted in the same gameplay as last time.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">qLearning?</p>
            <p>At this point I looked into alternate methods, and once I realized that qLearning was nothing more than a fancy spreadsheet, I knew this was the solution.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Implementation</p>
            <p>All I had to do was create a table for each state that corresponded to an action. So a complex set of if statements determined the state of the snake while some simple math determined the weight of the actions as a result of the cost of the snakes movements.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">Dimensional Rifting</p>
            <p>While the idea was working, the over 100 lines of if statements that I had written could barely track the game state, so I switched to a multidimensional numpy array so I could track each attribute of play individually.</p>
          </div>
        </div>
        <div class="timeline-item is-dark">
          <div class="timeline-marker is-dark"></div>
          <div class="timeline-content has-text-left">
            <p class="heading">GUI</p>
            <p>After the success of multiple dimensions, I was able to clean up the look of the game and track the progress of the bot. It managed to reach over 50 points in the end. </p>
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
      <p>The main challenge of the project was simply learning how to manage data. In order to keep track of the snake I had to create the correct array, and in order to find the correct state, I had to create a multidimensional array. This experience reflects a sentiment that I heard from a couple of different places; that half the battle in machine learning is obtaining the correct data. Next time I attempt something like this, I want to try a couple of different things. The first is simply that I would like to have my algorithm think further into the future, because right now, it can only predict a single move at a time. I would also like to get it to train off of the images on screen rather than the data I extract from the game so I could pontentially teach the model to play other games. Overall, this was a really cool and empowering experience that taught me a lot about machine learning and inspired me on where to go next.</p>
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