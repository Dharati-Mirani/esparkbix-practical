<template>
  <div class="card">
    <div class="card-header font-weight-bold">
      <span style="font-size: 18px">
        <i class="sidenav-icon fas fa-book"></i> List of Applications
      </span>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="card mb-4">
          <h6 class="card-header">Search</h6>
          <div class="card-body">
            <form method="GET" v-on:submit.prevent="search">
              <label>Name</label>
              <input type="text" v-model="name"/>
              <button type="submit"> Search
              </button>
            </form>
          </div>
        </div>
      </div>
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
              @click="viewApplication(application.id)"
              class="far fa-eye text-success mr-1"
            ></i>
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
      applications: {},
      name: '',
    };
  },
  mounted() {
    this.getApplication();
  },
  methods: {
    getApplication() {
      let param = '';
      let name = this.$route.query.name;
      if(name) {
        param = '?name='+this.$route.query.name;
      }
      this.name = this.$route.query.name;
      axios
        .get("api/application/get-applications"+param)
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
    viewApplication(id) {
      const path = `/admin/view-application/${id}`;
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
    },
    search() {
      let name = this.name;
      const path = `/admin/applications?name=`+this.name;
      this.$router.push(path);
      window.location.reload();
    }
  },
  computed: {
    applicationData: function(){
      axios
        .get("api/application/get-applications"+param)
        .then(response => {
          if (response.data.status) {
            return response.data.applications;
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