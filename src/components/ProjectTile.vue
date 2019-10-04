<template>
  <div id="app">
    <div class="box has-background-dark">
      <img :src="data.images"/>
      <div id="content">
        <h1 class="has-text-light title">{{ data.title }}</h1>
      </div>
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

<style scoped>

.box {
  border-radius: 16px;
  height: 350px;
  width: 512px;
  padding: 0px;
}

.title {
  font-size: 25px;
}

#content {
  padding: 16px 32px 16px 32px;
}

img {
  border-radius: 16px 16px 0px 0px;
  object-fit: cover;
  height: 175px;
  width: 512px;
  padding: 0;
}

</style>