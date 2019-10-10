<template>
  <div id="app">
    <form name="contact" method="post" netlify>
      <p>
        <label>Name <input class="input" type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input class="input" type="email" name="email" /></label>
      </p>
      <p>
        <label>Subject <input class="input" type="email" name="email" /></label>
      </p>
      <p>
        <label>Message <textarea class="textarea" placeholder="Textarea"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
</style>
