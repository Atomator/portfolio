<template>
  <div>
    <form 
      name="contact" 
      action="/#/" 
      method="post" 
      netlify
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="columns">
        <div class="column is-half">  
          <label for="name" class="label">Name:</label> 
          <input type="text" name="name" class="input" required/>
        </div>
        <div class="column is-half">
          <label for="email" class="label">Email:</label>
          <input type="email" name="email" class="input" required/>
        </div>
      </div>
      <div>
        <label for="message" class="label">Message:</label>
        <textarea name="message" class="textarea" required></textarea>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <button type="submit" value="Send message" class="button is-primary">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
.field {
  margin-top: 15px;
}
</style>