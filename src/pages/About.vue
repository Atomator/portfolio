<template>
  <div id="app">
    <div class="has-text-centered columns is-centered">
      <div class="column is-three-fifths">
        <img :src="require('src/assets/images/pfp_me.jpg')" alt="connor-sparks">
        <h1 class="title">Connor Sparks<strong class="has-text-primary">.</strong></h1>
        <div class="icon-container">
          <a class="icon" href="https://dribbble.com/Atomator">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path id="_ionicons_svg_logo-dribbble" d="M80,64A16,16,0,1,0,96,80,16,16,0,0,0,80,64Zm10.158,7.375A13.312,13.312,0,0,1,93.3,79.117a67.457,67.457,0,0,0-9.1.108c-.35-.883-.708-1.75-1.1-2.583A16.2,16.2,0,0,0,90.158,71.375ZM80,66.667a13.274,13.274,0,0,1,8.508,3.067,16.587,16.587,0,0,1-6.558,4.633,32.565,32.565,0,0,0-5.233-7.275A13.381,13.381,0,0,1,80,66.667Zm-6.033,1.458a32.216,32.216,0,0,1,5.317,7.217,35.023,35.023,0,0,1-10.142,1.442c-.7,0-1.383-.025-2.058-.067A13.342,13.342,0,0,1,73.967,68.125ZM66.692,79.367c.758.033,1.525.05,2.3.042a39.441,39.441,0,0,0,11.467-1.783q.475.987.9,2.025a8.249,8.249,0,0,0-1.192.358A19.915,19.915,0,0,0,70,88.8,13.284,13.284,0,0,1,66.667,80C66.667,79.783,66.675,79.575,66.692,79.367ZM80,93.333a13.256,13.256,0,0,1-8.175-2.808,18.338,18.338,0,0,1,8.933-8.233,7.183,7.183,0,0,1,1.45-.442q.712,1.975,1.275,4.1a48.434,48.434,0,0,1,1.233,6.508A13.21,13.21,0,0,1,80,93.333Zm7.208-2.125a48.105,48.105,0,0,0-1.242-6.575c-.283-1.083-.608-2.133-.958-3.158a56.672,56.672,0,0,1,8.242,0A13.32,13.32,0,0,1,87.208,91.208Z" transform="translate(-64 -64)" fill="#f7f7ff"/>
            </svg>
          </a>
          <a class="icon" href="https://github.com/Atomator">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path id="_ionicons_svg_logo-github" d="M48,32A16.211,16.211,0,0,0,32,48.407,16.376,16.376,0,0,0,42.943,63.971a1.254,1.254,0,0,0,.271.029.774.774,0,0,0,.821-.814c0-.393-.014-1.421-.021-2.793a7.315,7.315,0,0,1-1.614.193,3.717,3.717,0,0,1-3.779-2.393,4.333,4.333,0,0,0-1.779-2.4c-1.393-.979-.007-1.007.1-1.007h.007a3.44,3.44,0,0,1,2.45,1.7,3.141,3.141,0,0,0,2.829,1.793,4.5,4.5,0,0,0,1.829-.429,3.544,3.544,0,0,1,1.014-2.193c-3.55-.414-7.286-1.821-7.286-8.107a6.422,6.422,0,0,1,1.643-4.4,6.04,6.04,0,0,1,.157-4.343,1.331,1.331,0,0,1,.357-.036c.579,0,1.886.221,4.043,1.721a14.872,14.872,0,0,1,8.014,0c2.157-1.5,3.464-1.721,4.043-1.721a1.331,1.331,0,0,1,.357.036,6.04,6.04,0,0,1,.157,4.343,6.448,6.448,0,0,1,1.643,4.4c0,6.3-3.743,7.686-7.307,8.093a3.978,3.978,0,0,1,1.086,3.036c0,2.193-.021,3.964-.021,4.5a.77.77,0,0,0,.814.821,1.382,1.382,0,0,0,.286-.029A16.466,16.466,0,0,0,48,32Z" transform="translate(-32 -32)" fill="#f7f7ff"/>
            </svg>
          </a>
          <a class="icon" href="https://medium.com/@connorsparks">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path id="Exclusion_4" data-name="Exclusion 4" d="M-2965.753-1498a15.9,15.9,0,0,1-11.314-4.687,15.9,15.9,0,0,1-4.687-11.314,15.9,15.9,0,0,1,4.687-11.314,15.9,15.9,0,0,1,11.314-4.686,15.9,15.9,0,0,1,11.314,4.686,15.9,15.9,0,0,1,4.686,11.314,15.9,15.9,0,0,1-4.686,11.314A15.9,15.9,0,0,1-2965.753-1498Zm2.762-18.613h0v7.246c0,.2,0,.23-.126.357l-1.289,1.25v.268h6.255v-.268l-1.243-1.22a.372.372,0,0,1-.142-.357v-8.971a.373.373,0,0,1,.142-.357l1.274-1.221v-.267h-4.409l-3.142,7.839-3.575-7.839h-4.624v.267l1.489,1.795a.621.621,0,0,1,.2.521v7.051a.815.815,0,0,1-.216.7l-1.676,2.032v.269h4.751v-.269l-1.676-2.032a.844.844,0,0,1-.23-.7v-6.1l4.17,9.1h.483Z" transform="translate(2981.753 1530)" fill="#f7f7ff"/>
            </svg>
          </a>
          <!-- <a class="icon">
            <img src="../assets/media icons/linkedin.svg" class="logo">
          </a> -->
        </div>
        <p id="description" class="is-size-6">
          👋  Welcome to my portfolio! The content that lives on this website is simply the result of my endless fascination with all things technological. Over the years, I’ve done everything from creating VR experiences with Unity to attempting to code state of the art machine learning models. Though the projects I work on vary, they all stem from a desire to learn about the systems that are becoming foundational to society, so that one day, I can use these systems to make a difference. Along with writing code, I also write about my experiences on Medium. Though my Medium musings are often filled with typos or are simply short updates about how I’ve done nothing that week, I continue writing in the knowledge that one day I’ll get better and the things that I’ve learned will one day help others.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <about-tile v-for="(value) in pageData" v-bind:key="value.id" :data="value"></about-tile>
      </div>
    </div>

  </div>
</template>

<script>
import AboutTile from '../components/AboutTile.vue'

export default {
  name: 'About',
  components: { AboutTile },
  data () {
    return {
      "pageData": [
        {
          "title": "Tools",
          "interests": ["VS Code", "Figma", "Github", "Adobe XD", "Google Colab"]
        },
        {
          "title": "Interests",
          "interests": ["AWS", "Machine Learning", "Game Development", "Web Development", "VR"]
        },
        {
          "title": "Languages",
          "interests": ["Python", "Tensorflow/Keras", "Javascript", "Vuejs", "HTML/CSS", "C#"]
        },
      ]
    }
  }
}
</script>

<style scoped>

#app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.title {
  font-size: 35px;
  font-weight: 900;
}

img {
  margin-bottom: 24px;
  border-radius: 50%;
  object-fit: cover;
  height: 128px;
  width: 128px;
  padding: 0;
}

#description {
  margin: 48px 0px 48px 0px;
  font-size: 18px;
  padding: 0px 32px 0px 32px;
}

.icon-container {
  margin-top: 42px;
  margin-bottom: 0px;
}

.icon {
  margin-right: 32px;
  margin-left: 32px;
}

path {
  fill: #71A9F7;
}

</style>
