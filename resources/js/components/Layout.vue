<template>
  <div class="layout-wrapper layout-2">
    <div class="layout-inner">
      <side-bar></side-bar>

      <!-- Layout container -->
      <div class="layout-container">
        <nav-bar v-on:log-out="logout"></nav-bar>
        <div class="layout-content">
          <div class="container-fluid flex-grow-1 container-p-y">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <!-- / Layout container -->
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import notification from "./../mixins/notify";

export default {
  mixins: [notification],
  components: {
    "nav-bar": Navbar,
    "side-bar": Sidebar
  },
  methods: {
    logout() {
      let user_id = localStorage.getItem("user_id");

      const payLoad = {
        user_id: user_id
      };

      axios
        .post("/api/logout", payLoad)
        .then(response => {
          if (response.data.status == 1) {
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            this.success(response.data.msg);
            this.$router.push("/");
          } else {
            this.error(response.data.msg);
          }
        })
        .catch(error => {
          this.error(error);
        });
    }
  }
};
</script>