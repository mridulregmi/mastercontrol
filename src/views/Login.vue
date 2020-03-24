<template>
  <div class="login mt-4">
    <div class="login_logo_div">
      <img class="login_logo" alt="HUX logo" src="../assets/hux_logo.jpg" />
    </div>
    <div class="login_welcome_div">
      <h1 class="login_welcome">
        Hux Engage Model Selection
      </h1>
    </div>
    <div class="login_form_div">
      <form class="form-group">
        <div class="login_form_div1">
          <input
            type="text"
            name="username"
            class="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div class="login_form_div1">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="login_submit_div">
          <button
            type="button"
            id="submit"
            class="btn btn-success-outline"
            @click="auth"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    auth() {
      this.$router.push({ path: "/modelselection" });
    }
  }
};
</script>
