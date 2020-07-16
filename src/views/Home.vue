<template>
  <v-container>
    <v-card flat tile>
      <v-text-field
        label="Search By First or Last Name"
        prepend-icon="mdi-magnify"
        v-model="searchterm"
        @keyup="searchName(searchterm)"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="reset">clear</v-btn>
      </v-card-actions>
    </v-card>
    <h1>Search Results</h1>
    <ul>
      <li v-for="student in searchResults" :key="student._id">
        {{ student.firstName }} {{ student.lastName }}
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      searchterm: ""
    };
  },
  methods: {
    searchName(name) {
      if (name) {
        this.$store.dispatch("searchStudent", { name: name });
      } else {
        this.$store.dispatch("clearSearchResult");
      }
    },
    reset() {
      this.searchterm = "";
      this.$store.dispatch("clearSearchResult");
    }
  },
  computed: {
    searchResults() {
      return this.$store.getters.getSearchResults;
    }
  },
  created() {
    this.$store.dispatch("getAllStudents");
  }
};
</script>
