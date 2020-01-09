import Vue from "vue";
import Vuex from "vuex";
import Books from "./modules/Books";
import Users from "./modules/Users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Books,
    Users
  }
});
