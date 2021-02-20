<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card mb-4">
        <h4 class="card-header">Add User</h4>
        <div class="card-body">
          <ValidationObserver v-slot="{ invalid }">
            <form method="POST" @submit.prevent="addUser">
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <label class="form-label">First Name *</label>
                    <validation-provider
                      name="First Name"
                      rules="required|alpha"
                      v-slot="{ errors }"
                    >
                      <input
                        :class="[errors[0] ? 'form-control-red' : '']"
                        type="text"
                        class="form-control mb-1"
                        v-model="first_name"
                      />
                      <small
                        :class="[errors[0] ? 'text-danger' : 'text-muted']"
                        class="font-weight-bold"
                        style="font-size: 11px"
                        >{{ errors[0] ? errors[0] : "Enter First Name" }}</small
                      >
                    </validation-provider>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label class="form-label">Last Name *</label>
                    <validation-provider
                      name="Last Name"
                      rules="required|alpha"
                      v-slot="{ errors }"
                    >
                      <input
                        :class="[errors[0] ? 'form-control-red' : '']"
                        type="text"
                        class="form-control mb-1"
                        v-model="last_name"
                      />
                      <small
                        :class="[errors[0] ? 'text-danger' : 'text-muted']"
                        class="font-weight-bold"
                        style="font-size: 11px"
                        >{{ errors[0] ? errors[0] : "Enter Last Name" }}</small
                      >
                    </validation-provider>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label class="form-label">Email *</label>
                    <validation-provider
                      name="Email"
                      rules="required|email"
                      v-slot="{ errors }"
                    >
                      <input
                        :class="[errors[0] ? 'form-control-red' : '']"
                        type="text"
                        class="form-control mb-1"
                        v-model="email"
                      />
                      <small
                        :class="[errors[0] ? 'text-danger' : 'text-muted']"
                        class="font-weight-bold"
                        style="font-size: 11px"
                        >{{
                          errors[0] ? errors[0] : "Enter a valid Email address"
                        }}</small
                      >
                    </validation-provider>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <label class="form-label">Phone *</label>
                    <validation-provider
                      name="Phone"
                      rules="required|digits:10"
                      v-slot="{ errors }"
                    >
                      <input
                        :class="[errors[0] ? 'form-control-red' : '']"
                        type="text"
                        class="form-control mb-1"
                        v-model="phone"
                      />
                      <small
                        :class="[errors[0] ? 'text-danger' : 'text-muted']"
                        class="font-weight-bold"
                        style="font-size: 11px"
                        >{{
                          errors[0] ? errors[0] : "Enter a valid Phone number"
                        }}</small
                      >
                    </validation-provider>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label class="form-label">Password *</label>
                    <validation-provider
                      name="Password"
                      rules="required|min:8"
                      v-slot="{ errors }"
                    >
                      <input
                        :class="[errors[0] ? 'form-control-red' : '']"
                        type="password"
                        class="form-control mb-1"
                        v-model="password"
                      />
                      <small
                        :class="[errors[0] ? 'text-danger' : 'text-muted']"
                        class="font-weight-bold"
                        style="font-size: 11px"
                        >{{
                          errors[0] ? errors[0] : "Enter a strong Password"
                        }}</small
                      >
                    </validation-provider>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                :disabled="invalid"
                class="btn btn-sm btn-success font-weight-bold mt-2"
              >
                Add
              </button>
              <router-link
                to="/admin/appusers"
                class="btn btn-sm btn-secondary mt-2"
                >Cancel</router-link
              >
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notification from "./../../mixins/notify";

export default {
  mixins: [notification],
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: ""
    };
  },
  methods: {
    addUser() {
      const payLoad = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        password: this.password
      };
      axios
        .post("/api/appusers/add", payLoad)
        .then(response => {
          if (response.data.status == 1) {
            this.success(response.data.msg);
            this.$router.push("/admin/appusers");
          }
          if (response.data.status != 1) {
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

<style scoped>
.form-control-red {
  border: 1px solid red !important;
}
.mx-input {
  border: 1px solid rgba(24, 28, 33, 0.1) !important;
  height: 37px !important;
}
</style>