<template>
  <div class='login'>
    <div class="login_logo_div">
      <img class='login_logo' alt='HUX logo' src='../assets/hux_logo.jpg' />
    </div>
    <div class="login_welcome_div">
      <h2 class="login_welcome">Welcome to HUX Engage <br> Model Selection</h2>
    </div>
    <div class="login_form_div">
      <form class="form-group">
        <div class="login_form_div1">
          <input type="text" name="username" class="form-control" placeholder="Username" required>
        </div>
        <div class="login_form_div1">
          <input type="password" class="form-control" placeholder="Password" required>
        </div>
        <div class="login_submit_div">
          <button type="submit" id="submit" class="btn btn-primary">
            <router-link to="/ModelSelection">Submit</router-link></button>
        </div>
    </form>
    </div>
  </div>
</template>
