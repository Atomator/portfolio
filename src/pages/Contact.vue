<template>
  <div>
    <form action="https://getsimpleform.com/messages?form_api_token=4509df9eb4afd18538cf77fc19741a9b" method="post">
      <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
      <input type='hidden' name='redirect_to' value='https://atomator-portfolio.netlify.com/#/' />
      <!-- all your input fields here.... -->
      <input type='text' name='test' />
      <input type='submit' value='Test form' />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>