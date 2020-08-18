<template>
  <card class="card" title="Edit Profile">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-3">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
          </div>

          <div class="col-md-9">
            <div class="row">
              <div class="col-md-6">
                <fg-input
                  type="text"
                  label="Full name"
                  :disabled="false"
                  placeholder="Enter your name..."
                  v-model="user.name"
                ></fg-input>
              </div>

              <div class="col-md-3">
                <fg-input
                  type="text"
                  label="Code"
                  :disabled="true"
                  placeholder="Enter your name..."
                  v-model="user.code"
                ></fg-input>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <label class="control-label">Sex</label>
                  <b-form-radio-group
                    v-model="selected"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <fg-input
                  type="text"
                  label="Username"
                  :disabled="true"
                  placeholder="Enter your username..."
                  v-model="user.username"
                ></fg-input>
              </div>

              <div class="col-md-3">
                <fg-input
                  type="password"
                  label="Password"
                  :disabled="false"
                  placeholder="Enter your password..."
                  v-model="user.password"
                ></fg-input>
              </div>

              <div class="col-md-3">
                <label for="control-label">Date of birth</label>
                <b-input-group class="mb-3">
                  <b-form-input
                    id="example-input"
                    v-model="user.dob"
                    type="text"
                    placeholder="Choose your dob..."
                    autocomplete="off"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-form-datepicker
                      v-model="user.dob"
                      button-only
                      right
                      locale="en-US"
                      aria-controls="example-input"
                      @context="onContext"
                    ></b-form-datepicker>
                  </b-input-group-append>
                </b-input-group>
        
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="City"
              :disabled="true"
              placeholder="Paper dashboard"
              v-model="user.city"
            ></fg-input>
          </div>

          <div class="col-md-4">
            <fg-input
              type="text"
              label="District"
              :disabled="true"
              placeholder="Paper dashboard"
              v-model="user.district"
            ></fg-input>
          </div>

          <div class="col-md-4">
            <fg-input
              type="text"
              label="Ward"
              :disabled="true"
              placeholder="Paper dashboard"
              v-model="user.ward"
            ></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Address"
              :disabled="false"
              placeholder="Enter your address..."
              v-model="user.address"
            ></fg-input>
          </div>
          <div class="col-md-3">
            <fg-input
              type="text"
              label="Telephone"
              placeholder="Enter your tel..."
              v-model="user.tel"
            ></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="email"
              label="Email"
              placeholder="Enter your email..."
              v-model="user.mail"
            ></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>About Me</label>
              <textarea
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your description"
                v-model="user.desc"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">Update Profile</p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        id: "",
        code: "B16DCCN288",
        name: "Nguyen Van Quang",
        dob: "30/07/1998",
        sex: 1,
        username: "B16DCCN288",
        password: "pass",
        address: "14 LHP",
        tel: "0915997460",
        img_seq: "",
        mail: "quangoc98@gmail.com",
        city: "",
        district: "",
        ward: "",
        desc: `We must accept finite disappointment, but hold on to infinite hope.`,
      },
      selected: "A",
      options: [
        { item: "A", name: "Male" },
        { item: "B", name: "Female" },
      ],
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "avatar",
      },
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    onContext(ctx) {
      this.user.dob = ctx.selectedYMD
    }
  },
};
</script>
<style>
.avatar {
  width: 500px;
  height: 500px;
}
</style>
