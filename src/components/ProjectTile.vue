<template>
  <div id="app">
    <router-link :to="'/projects/' + data.page">
      <div class="box has-background-dark">
        <img :src="data.images" :alt="data.alt"/>
        <div id="content">
          <div class="child">
            <h1 class="title-custom has-text-light">{{ data.title }}</h1>
          </div>
          <div class="child">
            <div class="tag-container has-text-centered level-item has-background-primary" v-for="(value) in data.tags" v-bind:key="value.id">
              <p class="tag-text has-text-weight-bold has-text-light"> {{ value }} </p>
            </div>
          </div>
          <div class="child">
            <p class="text-content has-text-light"> {{ data.description }} </p>
          </div>
        </div>
      </div>
    </router-link>
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
  height: auto;
  width: 400px;
  padding: 0px;
  margin: 15px;
}

.child {
  min-height: 25px;
}

.title-custom {
  font-size: 22px;
  margin-bottom: 8px;
  font-weight: 600;
  line-height: 1.125;
}

.tag-container {
  border-radius: 15px;
  padding: 1px 8px 1px 8px;
  margin-top: 1px;
  margin-right: 12px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, .16);
  font-size: 7px;
  height: 12px;
  float: left;
}

.text-content {
  font-size: 11px;
  margin-bottom: 8px;
}

#content {
  padding: 16px 32px 16px 32px;
}

img {
  border-radius: 16px 16px 0px 0px;
  object-fit: cover;
  height: 150px;
  width: 400px;
  padding: 0;
}

</style>