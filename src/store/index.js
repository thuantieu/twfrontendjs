import { createStore } from "vuex";

export default createStore({
  state: {
    leftDrawerState: {
      location: "left",
      showDrawer: false,
    },
    islogin: false
  },
  getters: {},
  mutations: {
    fetchShowDrawer(state, payload) {
      state.leftDrawerState.showDrawer = payload;
    },
    fetchLogin(state, payload) {
      state.islogin = payload;
    },
  },
  actions: {
    changeShowDrawer(context, payload) {
      let showDrawer = context.state.leftDrawerState.showDrawer;
      showDrawer = payload;
      context.commit("fetchShowDrawer", showDrawer);
    },
    changeLogin(context, payload) {
      let islogin = context.state.islogin;
      islogin = payload;
      context.commit("fetchLogin", islogin);
    },
  },
  modules: {},
});
