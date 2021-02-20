<template>
  <div class="card">
    <div class="card-header font-weight-bold">
      <span style="font-size: 18px">
        <i class="sidenav-icon fas fa-book"></i> List of Applications
      </span>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Contact Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(application, index) in applications" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ application.name }}</td>
          <td>{{ application.email }}</td>
          <td>{{ application.gender }}</td>
          <td>{{ application.contact }}</td>
          <td>
            <i
              style="cursor:pointer;"
              @click="editApplication(application.id)"
              class="far fa-edit text-success mr-1"
            ></i>
            <i
              style="cursor:pointer;"
              @click="deleteApplication(application.id)"
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
      applications: {}
    };
  },
  mounted() {
    this.getApplication();
  },
  methods: {
    getApplication() {
      axios
        .get("api/application/get-applications")
        .then(response => {
          if (response.data.status) {
            this.applications = response.data.applications;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    editApplication(id) {
      const path = `/admin/edit-application/${id}`;
      if (this.$router.path !== path) this.$router.push(path);
    },
    deleteApplication(id) {
      const payLoad = {
        app_id: id
      };

      axios
        .post("api/application/delete", payLoad)
        .then(response => {
          if (response.data.status) {
            this.success(response.data.msg);
            this.application = response.data.application;
            window.location.reload();
          } else {
            this.error(response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>