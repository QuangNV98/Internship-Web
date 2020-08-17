<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel"/>
        <sidebar-link to="/user" name="User Profile" icon="ti-user"/>
        <sidebar-link to="/table-list" name="Table List" icon="ti-view-list-alt"/>
        <sidebar-link to="/admin/company" name="Company" icon="ti-text"/>
        <sidebar-link to="/admin/instructor" name="Instructor" icon="ti-pencil-alt2"/>
       <!-- <sidebar-link to="/maps" name="Map" icon="ti-map"/>
        <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/> -->
      </template>
      
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
