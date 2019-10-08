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
    <div class="columns is-centered">
      <div id="interests" class="box column is-one-quarter has-background-dark">
        <div id="header" class="has-background-primary has-text-centered">
          <h1 class="box-header has-text-light has-text-weight-bold">Interests</h1>
        </div>
        <div id="content" class="has-text-centered">
          <ul>
            <li>AWS</li>
            <li>Machine Learning</li>
            <li>Game Development</li>
            <li>Web Development</li>
          </ul>
        </div>
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

#interests {
  /* width: 512px; */
  height: 256px;
  border-radius: 16px;
  padding: 0px;
}

#header {
  height: 64px;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, .16);
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-header {
  font-size: 25px;
}

li {
  color: #F7F7FF;
  margin: 8px 0px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
