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
          "title": "Sentiment",
          "images": require('src/assets/images/sentiment.webp'),
          "tags": ["VueJS", "Tensorflow", "CapacitorJS"],
          "description": "Working with a team of amazing people, I helped to develop Sentiment: an application that classifies the emotions of journal entries through machine learning",
          "alt": "sentiment-mockup",
          "page": "sentiment"
        },
        {
          "title": "VRKit",
          "images": require('src/assets/images/vrkit.jpg'),
          "tags": ["VR", "AR", "Unity", "C#"],
          "description": "Ever since I first tried an Oculus Rift at a local Best Buy, I have been hooked on VR. So I tired something experimental; Apple’s ARKit + Google’s GVR, combined within Unity.",
          "alt": "vr-headset-cardboard",
          "page": "vrkit"
        },
        {
          "title": "Q Learning",
          "images": require('src/assets/images/qlearning.jpg'),
          "tags": ["Python", "Numpy", "Pygame"],
          "description": "After I realized that self-driving cars were indeed becoming a reality, I found myself becoming interested in ML. While I couldn’t create a self-driving car, I could teach my computer to play snake.",
          "alt": "snake-game-with-code",
          "page": "qlearning"
        },
        {
          "title": "Neural Network",
          "images": require('src/assets/images/neuralnetwork.jpg'),
          "tags": ["Python", "Numpy"],
          "description": "Wanting to understand ML, I decided to embark on a quest: create a neural network using nothing but Python, Numpy, and a lot of math that I didn't really understand.",
          "alt": "numpy-code",
          "page": "neuralnetwork"
        },
        {
          "title": "Driveline",
          "images": require('src/assets/images/driveline.jpg'),
          "tags": ["Javascript", "Vuejs", "Firebase"],
          "description": "Lead by a mentor, I worked with group of my fellow classmates in order to craft an app that would help our school more effectively manage its drop off and pickup situation.",
          "alt": "driveline-app",
          "page": "driveline"
        },
        // {
        //   "title": "Portfolio",
        //   "images": require('src/assets/images/portfolio.jpg'),
        //   "tags": ["XD", "HTML/CSS", "Vuejs", "Bulma"],
        //   "description": "Not having a great idea of what I have worked or a way to share it, I embarked on the quest to create a developer portfolio.",
        //   "alt": "adobe-xd",
        //   "page": "vrkit"
        // }
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
  margin: 25px 15px 35px 15px;
  margin-bottom: 35px;
  font-size: 15px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
