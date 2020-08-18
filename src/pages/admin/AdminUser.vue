<template>
  <div>
    <b-table
      :items="listUser"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    ></b-table>
  </div>
</template>

<script>
import UserService from "@/services/UserService";

export default {
  data() {
    return {    
      sortBy: "NAME",
      sortDesc: false,
      fields: [
        { key: "NAME", sortable: true },
        { key: "USERNAME", sortable: false },
        { key: "ADDRESS", sortable: false },
        { key: "PASSWORD", sortable: false },
        { key: "ROLE", sortable: false },
      ],
    };
  },
  methods: {
    listUser() {
      return UserService.getAll()
        .then((response) => {
          console.log(response.data);
          response.data.forEach(element => {
              if(element.ROLE == 1) element.ROLE = "Admin";
              if(element.ROLE == 0) element.ROLE = "Constructor";
              if(element.ROLE == -1) element.ROLE = "Student";
          });
          return response.data;
        })
        .catch((e) => {
          console.log(e);
          return [];
        });
    },
  },
};
</script>