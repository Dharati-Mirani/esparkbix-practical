<template>
  <div class="card">
    <div class="card-header font-weight-bold">
      <span style="font-size: 18px">
        <i class="sidenav-icon fas fa-user-tie"></i> List of Application Users
      </span>
      <router-link
        to="/admin/add-user"
        class="btn btn-sm btn-warning font-weight-bold float-right"
      >
        <i class="fas fa-plus"></i> ADD
      </router-link>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>
            <strong>{{ user.email }}</strong>
          </td>
          <td>{{ user.phone }}</td>
          <td>
            <i
              style="cursor:pointer;"
              @click="editUser(user.id)"
              class="far fa-edit text-success mr-1"
            ></i>
            <i
              style="cursor:pointer;"
              @click="deleteUser(user.id)"
              class="far fa-trash-alt text-danger ml-1"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import notification from "./../../mixins/notify";

export default {
  mixins: [notification],
  data() {
    return {
      users: {}
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("api/appusers")
        .then(response => {
          if (response.data.status) {
            this.users = response.data.users;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    editUser(id) {
      const path = `/admin/edit-user/${id}`;
      if (this.$router.path !== path) this.$router.push(path);
    },

    deleteUser(id) {
      let loggedinUser = localStorage.getItem("user_id");
      console.log(loggedinUser);
      console.log(id);
      if (loggedinUser == id) {
        this.error("Abort! You cannot delete logged in User");
      } else {
        const payLoad = {
          user_id: id
        };

        axios
          .post("api/appusers/delete", payLoad)
          .then(response => {
            if (response.data.status) {
              this.success(response.data.msg);
              this.users = response.data.users;
            } else {
              this.error(response.data.msg);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style>
</style>