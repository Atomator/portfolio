<template>
  <div id="app">
    <div class="container has-text-centered">
      <h1 class="title">Neat<strong class="has-text-primary">.</strong></h1>
      <h2 class="subtext has-text-weight-medium">
        Its not a lot, but here are a couple of the projects that I have worked on.
      </h2>
    </div>
    <div class="grid">
      <div v-for="(value) in pageData" v-bind:key="value.id">
        <project-tile :data="value"></project-tile>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTile from '../components/ProjectTile.vue'

export default {
  name: 'Projects',
  components: { ProjectTile },
  data () {
    return {
      "pageData": [
        {
          "title": "VRKit",
          "images": require('src/assets/images/vrkit.jpg'),
          "tags": ["VR", "AR", "Unity", "C#"],
          "description": "Ever since I had my first hands on time with an Oculus Rift at a local Best Buy, I have been hooked on VR. So I created an experiment; Apple’s ARKit + Google’s GVR combined within Unity.",
          "alt": "vr-headset-cardboard"
        },
        {
          "title": "Q Learning",
          "images": require('src/assets/images/qlearning.jpg'),
          "tags": ["Python", "Numpy", "Pygame"],
          "description": "When I was forced to the reality that a computer can in fact drive a car I became interested in ML. While I couldn’t teach a computer to drive a car I soon saw that I could teach it how to play a game. ",
          "alt": "snake-game-with-code"
        },
        {
          "title": "Neural Network",
          "images": require('src/assets/images/neuralnetwork.jpg'),
          "tags": ["Python", "Numpy"],
          "description": "Not understanding Artificial Neural Networks I embarked on a quest, create a NN using nothing but Python, Numpy, and a lot of math that was way above my skill level.",
          "alt": "numpy-code"
        },
        {
          "title": "Driveline",
          "images": require('src/assets/images/driveline.jpg'),
          "tags": ["Javascript", "Vuejs", "Firebase", "HTML", "Bootstrap"],
          "description": "Working with web design this was my first time coding with a group. With my fellow classmates and a mentor, we began to craft an app to help with the schools drop off and pickup.",
          "alt": "driveline-app"
        },
        {
          "title": "Portfolio",
          "images": require('src/assets/images/portfolio.jpg'),
          "tags": ["XD", "HTML/CSS", "Vuejs", "Bulma"],
          "description": "Not having a great idea of what I have worked or a way to share it, I embarked on the quest to create a web developer portfolio that would at least be okay.",
          "alt": "adobe-xd"
        }
      ]
    }
  }
}
</script>

<style scoped>

.title {
  font-size: 35px;
  font-weight: 900;
}

.subtext {
  margin-top: 25px;
  margin-bottom: 35px;
  font-size: 15px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
