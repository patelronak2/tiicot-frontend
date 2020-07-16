import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
    searchResults: []
  },
  getters: {
    getStudents(state) {
      return state.students;
    },
    getSearchResults(state) {
      return state.searchResults;
    }
  },
  mutations: {
    SET_STUDENT(state, students) {
      state.students = students
    },
    SET_SEARCH_RESULT(state, name) {

      state.searchResults = state.students.filter((student) => {
        return student.firstName.toLowerCase().includes(name) || student.lastName.toLowerCase().includes(name)
      });
    },
    CLEAR_RESULTS(state) {
      state.searchResults = [];
    }
  },
  actions: {
    getAllStudents({ commit }) {
      // console.log("Getting All Students");
      axios.get("http://immense-dawn-46047.herokuapp.com/api/v1/students").then(response => {
        commit("SET_STUDENT", response.data.data);
      }).catch(error => {
        console.error(error);
      });
    },

    searchStudent({ commit }, payload) {
      commit("SET_SEARCH_RESULT", payload.name.toLowerCase());
    },

    clearSearchResult({ commit }) {
      commit("CLEAR_RESULTS");
    }
  },
  modules: {}
});
