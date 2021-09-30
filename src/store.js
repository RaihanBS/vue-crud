import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    categories: []
  },
  mutations: {
    addPost(state, payload) {
      state.posts.push(payload);
    },
    editPost(state, payload) {
      const index = state.posts.findIndex(post => post.id === payload.id);
      state.posts.splice(index, 1, { ...payload });
    },
    deletePost(state, payload) {
      const index = state.posts.findIndex(post => post.id === payload.id);
      state.posts.splice(index, 1);
    },
    addCategory(state, payload) {
      state.categories.push(payload);
    },
    editCategory(state, payload) {
      const index = state.categories.findIndex(
        category => category.id === payload.id
      );
      state.categories.splice(index, 1, { ...payload });
    },
    deleteCategory(state, payload) {
      const index = state.categories.findIndex(
        category => category.id === payload.id
      );
      state.categories.splice(index, 1);
    },
    getPostsFromLocal(state, payload) {
      state.posts.push(...payload);
    },
    getCategoriesFromLocal(state, payload) {
      state.categories.push(...payload);
    }
  }
});
