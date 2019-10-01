import Vue from "vue";
import Vuex from "vuex";
import { loginUser } from "../api";
import {
  saveAuthToCookie,
  saveUserToCookie,
  getUserFromCookie,
  deleteCookie,
} from "../utils/cookies.js";
// import { truncate } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    token: "",

  },
  getters: {
    isLoggedIn(state) {
      return !!state.token || getUserFromCookie();
    },
    userToken(state) {
      return state.token;
    },
    userData(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
      deleteCookie("vtn_auth");
      deleteCookie("vtn_user");
    },


  },
  actions: {
    async LOGIN({ commit }, data) {
      const response = await loginUser(data);
      if (response.data.statusCode == 200) {
        commit("SET_USER", response.data.user);
        commit("SET_TOKEN", response.data.token);
        saveUserToCookie(JSON.stringify(response.data.user));
        saveAuthToCookie(response.data.token);
      }
      return response;
    },

  },
});
