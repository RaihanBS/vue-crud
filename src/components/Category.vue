<template>
  <div>
    <div class="category-content-first">
      <div class="allCategory">
        All Category
      </div>
      <div>
        <button class="category-button" v-on:click="createCategory">
          +CREATE CATEGORY
        </button>
      </div>
    </div>

    <div>
      <div class="category-content-second">
        <div>Name</div>
        <div>Action</div>
      </div>
    </div>

    <hr />

    <div
      class="category-content-third"
      v-for="(category, index) in categories"
      :key="index"
    >
      <div>{{ category.name }}</div>
      <div>
        <span>
          <button @click="editCategory(category)">Edit</button>
        </span>
        <span>
          <button @click="deleteCategory(category)">Delete</button>
        </span>
      </div>
    </div>

    <modal
      :creating="creating"
      :currentCategory="currentCategory"
      :showModal="showModal"
      :toggleModal="toggleModal"
    ></modal>
  </div>
</template>

<script>
import Modal from "./CategoryModal.vue";

export default {
  components: {
    modal: Modal
  },
  data() {
    return {
      creating: true,
      showModal: false,
      currentCategory: {}
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    createCategory() {
      this.creating = true;
      this.currentCategory = {};
      this.toggleModal();
    },
    editCategory(category) {
      this.creating = false;
      this.currentCategory = { ...category };
      this.toggleModal();
    },
    deleteCategory(category) {
      this.$store.commit("deleteCategory", category);
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    }
  }
};
</script>

<style>
.category-content-first {
  margin-top: 50px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.allCategory {
  font-size: 20px;
}

.category-button {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
}

.category-content-second {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-content-third {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
