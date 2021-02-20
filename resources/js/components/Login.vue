<template>
  <div
    class="authentication-wrapper authentication-2 ui-bg-cover ui-bg-overlay-container px-4"
  >
    <div class="ui-bg-overlay bg-dark opacity-25"></div>

    <div class="authentication-inner py-5">
      <div class="card">
        <div class="p-3 p-sm-5">
          <h4 class="text-center text-muted font-weight-bold mb-4 mt-2">
            Sign In
          </h4>

          <!-- Form -->
          <ValidationObserver v-slot="{ invalid }">
            <form method="POST" v-on:submit.prevent="login">
              <div class="form-group">
                <label class="form-label">Email</label>
                <validation-provider
                  name="Email | Phone Number"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <input
                    :class="[errors[0] ? 'form-control-red' : '']"
                    type="text"
                    class="form-control mb-1"
                    v-model="email"
                  />
                  <small
                    class="text-danger font-weight-bold"
                    style="font-size: 11px"
                    >{{ errors[0] }}</small
                  >
                </validation-provider>
              </div>
              <div class="form-group">
                <label class="form-label">Password</label>
                <validation-provider
                  name="Password"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <input
                    :class="[errors[0] ? 'form-control-red' : '']"
                    type="password"
                    class="form-control mb-1"
                    v-model="password"
                  />
                  <small
                    class="text-danger font-weight-bold"
                    style="font-size: 11px"
                    >{{ errors[0] }}</small
                  >
                </validation-provider>
              </div>
              <div
                class="d-flex justify-content-between align-items-center m-0"
              >
                <button
                  type="submit"
                  :disabled="invalid"
                  class="btn btn-sm btn-success font-weight-bold"
                >
                  Sign In
                </button>
              </div>
            </form>
          </ValidationObserver>
          <!-- / Form -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notification from "./../mixins/notify";

export default {
  mixins: [notification],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    let token = localStorage.getItem("token");

    if (token) {
      this.checkToken();
    }
  },
  methods: {
    login() {
      const payLoad = {
        email: this.email,
        password: this.password
      };

      axios
        .post("/api/login", payLoad)
        .then(response => {
          if (response.data.status) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user_id", response.data.user_id);
            this.success(response.data.msg);
            this.$router.push("/admin/dashboard");
          } else {
            this.error(response.data.msg);
          }
        })
        .catch(error => {
          this.error(error);
        });
    },

    checkToken() {
      let user_id = localStorage.getItem("user_id");
      let token = localStorage.getItem("token");

      const payLoad = {
        user_id: user_id,
        token: token
      };

      axios
        .post("/api/check-token", payLoad)
        .then(response => {
          if (response.data.status == 1) {
            this.$router.push("/admin/dashboard");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.form-control-red {
  border: 1px solid red !important;
}
</style>