<template>
  <div id="app">
    <div class="box has-background-dark">
      <img :src="data.images"/>
      <div id="content">
        <h1 class="title-custom has-text-light">{{ data.title }}</h1>
        <nav class="level">
          <div class="level-left" v-for="(value) in data.tags" v-bind:key="value.id">
            <a class="level-item">
              <span class="tag is-primary is-rounded has-text-weight-bold"> {{ value }} </span>
            </a>
          </div>
        </nav>
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
  height: 300px;
  width: 400px;
  padding: 0px;
}

.title-custom {
  font-size: 25px;
  margin-bottom: 0px;
  font-weight: 600;
  line-height: 1.125;
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

.tag {
  padding: 0px 12px 0px 12px;
  font-size: 8px;
}

</style>