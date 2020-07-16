<template>
  <v-container>
    <h1>List of All Students</h1>
    <ul>
      <li v-for="student in students" :key="student._id">
        {{ student.firstName }} {{ student.lastName }}
      </li>
    </ul>
  </v-container>
</template>
<script>
export default {
  name: "AllStudents",
  computed: {
    students() {
      return this.$store.getters.getStudents;
    }
  },
  created() {
    this.$store.dispatch("getAllStudents");
  }
};
</script>