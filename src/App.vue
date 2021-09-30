<template>
  <div id="app" class="container">
    <Tabs />
  </div>
</template>

<script>
import Tabs from "./components/Tabs.vue";
import store from "./store";

export default {
  name: "App",
  store,
  components: {
    Tabs
  },
  mounted() {
    if (localStorage.categories) {
      this.$store.commit(
        "getCategoriesFromLocal",
        JSON.parse(localStorage.getItem("categories"))
      );
    }
    if (localStorage.posts) {
      this.$store.commit(
        "getPostsFromLocal",
        JSON.parse(localStorage.getItem("posts"))
      );
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    categories() {
      return this.$store.state.categories;
    }
  },
  watch: {
    posts(newPost) {
      const parsed = JSON.stringify(newPost);
      localStorage.setItem("posts", parsed);
    },
    categories(newCategory) {
      const parsed = JSON.stringify(newCategory);
      localStorage.setItem("categories", parsed);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1000px;
  margin: auto;
}
</style>
