import { createStore } from "vuex";

export default createStore({
  state: {
    leftDrawerState: {
      location: "left",
      showDrawer: false,
    },
    islogin: false,
    dialog: {
      dialog: false,
      message: ""
    },
    token: '',
    publicPosts: [],
    currentPostId: '',
    currentPost: {},
    postDialog: false,
    defaultImage: 'https://ik.imagekit.io/pp2d3uqowp/social-gda26e3234_640.jpg'
  },
  getters: {},
  mutations: {
    fetchShowDrawer(state, payload) {
      state.leftDrawerState.showDrawer = payload;
    },
    fetchLogin(state, payload) {
      state.islogin = payload;
    },
    fetchDialog(state, payload) {
      state.dialog.dialog = payload
    },
    fetchDialogMessage(state, payload) {
      state.dialog.message = payload
    },
    fetchToken(state, payload) {
      state.token = payload
    },
    fetchPublicPosts(state, payload){
      state.publicPosts = payload
    },
    fetchCurrentId(state, payload) {
      state.currentPostId =payload
    },
    fetchCurrentPost(state, payload) {
      state.currentPost = payload
    },
    fetchPostDialog(state, payload) {
      state.postDialog = payload
    }
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
    changeDialog(context, payload) {
      let dialog = context.state.dialog.dialog
      dialog = payload    
      context.commit("fetchDialog", dialog);
    },
    changeDialogMessage(context, payload) {
      let message = context.state.dialog.message
      message = payload    
      context.commit("fetchDialogMessage", message);
    },
    setToken(context, payload) {
      let token = context.state.token
      token = payload    
      context.commit("fetchToken", token);
    },
    getPublicPosts(context, payload) {
      let posts = context.state.publicPosts
      posts = payload
      context.commit('fetchPublicPosts', posts)
    },
    getCurrentPostId(context, payload) {
      let id = context.state.currentPostId
      id = payload
      context.commit('fetchCurrentId', id)
    },
    getCurrentPost(context, payload) {
      let p = context.state.currentPost
      p = payload
      context.commit('fetchCurrentPost', p)
    },
    setPostDialog(context, payload) {
      let d = context.state.postDialog
      d = payload
      context.commit('fetchPostDialog', d)
    }
  },
  modules: {},
});
