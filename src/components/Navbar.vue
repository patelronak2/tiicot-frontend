<template>
  <v-app-bar color="deep-purple accent-4" dark app>
    <v-toolbar-title>Ronak Patel</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text :to="{ name: 'Home' }" exact>
        <v-icon class="mx-1">mdi-home</v-icon> Home
      </v-btn>
      <v-btn text :to="{ name: 'Allstudents' }">
        <v-icon class="mx-1">mdi-format-list-bulleted</v-icon> All Students
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {
  name: "Navbar"
};
</script>