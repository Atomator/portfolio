<template>
  <div id="interests" class="box column is-one-half has-background-dark">
      <div id="header" class="has-background-primary has-text-centered">
          <h1 class="box-header has-text-light has-text-weight-bold">{{ data.title }}</h1>
      </div>
      <div id="content" class="has-text-centered">
        <ul>
          <li v-for="(value) in data.interests" v-bind:key="value.id"> {{value}} </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AboutTile',
  props: {
    data: Object
  }
}
</script>

<style scoped>

#interests {
  /* width: 512px; */
  height: 256px;
  border-radius: 16px;
  padding: 0px;
  margin: 30px;
}

#header {
  height: 64px;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, .16);
  display: flex;
  align-items: center;
  justify-content: center;
}


#content {
  height: 192px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-header {
  font-size: 25px;
}

li {
  color: #F7F7FF;
  margin: 5px 0px 5px 0px;
}
</style>