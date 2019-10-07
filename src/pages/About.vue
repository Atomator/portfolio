<template>
  <div id="app">
    <div class="has-text-centered columns is-centered">
      <div class="column is-three-fifths">
        <h1 class="title">Connor Sparks<strong class="has-text-primary">.</strong></h1>
        <img :src="require('src/assets/images/pfp.jpg')" alt="connor-sparks">
        <p id="description" class="is-size-5">
          I have had a passion for everything programming for a long time and while that is good for me, it also means that I have created numerous different projects from all sorts of different fields. Currently I have been working with numerous technologies all the way from AR/VR with Unity, to ML with Tensorflow and Pytorch, to Web Development with Vuejs and Firebase. While I not sure exactly what I am going to do yet, I’m working on it; one step at a time.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
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
  margin: 0px;
}

img {
  border-radius: 50%;
  object-fit: cover;
  height: 128px;
  width: 128px;
  padding: 0;
}

#description {
  margin-top: 24px;
}

</style>
