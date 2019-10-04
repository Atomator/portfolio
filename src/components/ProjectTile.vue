<template>
  <div id="app">
    <div class="box has-background-dark">
      <img :src="data.images"/>
      <p>{{ data.images }}</p>
      <h1 class="has-text-light title">Hi</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTile',
  props: {
    data: Object
  }
}
</script>