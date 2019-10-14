<template>
  <div>
    <div class="container has-text-centered">
      <h1 class="title">A Little More About Me<strong class="has-text-primary">.</strong></h1>
      <div>
        <button type="submit" value="Send message" class="button is-primary has-text-weight-bold">Download</button>
      </div>
      <div>
        <button type="submit" value="Send message" class="button is-text has-text-weight-bold">Or View in Browser</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
}
</script>

<style scoped>
.is-primary {
  height: 50px;
  width: 175px;
  border-radius: 10px;
  box-shadow: 0 6px 6px rgba(10, 10, 10, 0.15);
  font-size: 18px;
  margin-top: 100px;
  margin-bottom: 25px;
}

.title {
  font-size: 35px;
  margin-bottom: 100px;
  font-weight: 900;
}
</style>