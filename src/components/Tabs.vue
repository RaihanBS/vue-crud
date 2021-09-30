<template>
  <div>
    <div class="tab-group">
      <button
        class="tab-style"
        v-on:click="switchTab(0)"
        v-bind:class="{ isActive: tabNumber === 0 }"
      >
        POST
      </button>
      <button
        class="tab-style"
        v-on:click="switchTab(1)"
        v-bind:class="{ isActive: tabNumber === 1 }"
      >
        CATEGORY
      </button>
    </div>

    <div class="tab-content">
      <div v-show="tabNumber === 0">
        <post />
      </div>
      <div v-show="tabNumber === 1">
        <category />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import Category from "./Category.vue";

export default {
  name: "Tabs",
  components: {
    post: Post,
    category: Category
  },
  data() {
    return {
      tabNumber: 0
    };
  },
  methods: {
    switchTab(value) {
      this.tabNumber = value;
    }
  }
};
</script>

<style>
.tab-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tab-style {
  width: 50%;
  padding: 15px;
  font-size: 24px;
  cursor: pointer;
  background-color: whitesmoke;
}

.isActive {
  color: white;
  background-color: orange;
}
</style>
