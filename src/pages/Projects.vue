<template>
  <div id="app">
    <div class="container has-text-centered">
        <h2 class="subtitle">
          This is the <strong>other</strong> page; used to demo navigation;
        </h2>
    </div>
    <div v-for="(value) in pageData" v-bind:key="value.id">
      <project-tile :data="value"></project-tile>
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
          "images": require('src/assets/images/placeholder.jpeg'),
          "tags": ["VR", "AR", "Unity", "C#"],
          "decription": ["Ever since I had my first hands on time with an Oculus Rift at a local Best Buy, I have been hooked on VR. So I created an experiment; Apple’s ARKit + Google’s GVR combined within Unity."]
        }
      ]
    }
  }
}
</script>
