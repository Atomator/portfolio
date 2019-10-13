<template>
  <div>
    <div class="container has-text-centered">
      <h1 class="title">Ask Away<strong class="has-text-primary">.</strong></h1>
    </div>
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
          <label for="name" class="label">Name</label> 
          <input type="text" name="name" class="input" required/>
        </div>
        <div class="column is-half">
          <label for="email" class="label">Email</label>
          <input type="email" name="email" class="input" required/>
        </div>
      </div>
      <div>
        <label for="message" class="label">Message</label>
        <textarea name="message" class="textarea" required></textarea>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <button type="submit" value="Send message" class="button is-primary has-text-weight-bold">Submit</button>
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
.button {
  height: 50px;
  width: 175px;
  border-radius: 10px;
  box-shadow: 0 6px 6px rgba(10, 10, 10, 0.15);
  font-size: 18px;
  margin-top: 100px;
}

.title {
  font-size: 35px;
  margin-bottom: 100px;
  font-weight: 900;
}

form {
  width: 40vw;
}
</style>