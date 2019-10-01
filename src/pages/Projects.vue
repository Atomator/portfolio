<template>
  <div id="app">
    <div class="container has-text-centered">
        <h2 class="subtitle">
          This is the <strong>other</strong> page; used to demo navigation;
        </h2>
    </div>
    <p>{{ this.pageData[0].account_name[1] }}</p>
    <div v-for="(value) in pageData" v-bind:key="value.id">
      <div v-for="(a) in value" v-bind:key="a.id">
        <div v-for="(b) in a" v-bind:key="b.id">
          {{ b }}
        </div>
      </div>
    </div>
    <project-tile></project-tile>
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
          "account_id": "11",
          "account_name": ["name11", "the"]
        },
        {
          "account_id": "21",
          "account_name": ["name11", "the"]
        },
        {
          "account_id": "31",
          "account_name": ["name11", "the"]
        }
      ]
    }
  }
}
</script>
