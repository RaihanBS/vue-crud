<template>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="post-modal-container">
            <div class="modal-header">
              <h3>{{ creating ? "CREATE POST" : "UPDATE POST" }}</h3>
            </div>

            <div class="modal-body">
              <div class="first-content">
                <div>
                  <label for="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    required
                    v-model="title"
                    placeholder="Type Title"
                  />
                </div>

                <div>
                  <label for="category">Add Category</label>
                  <select multiple v-model="category" id="category">
                    <!-- <option>
                      <button>+CREATE NEW CATEGORY</button>
                    </option> -->
                    <option v-for="cat in categories" :key="cat.id">
                      {{ cat.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="second-content">
                <label for="description">Post Body</label>
                <textarea
                  v-model="description"
                  id="description"
                  rows="10"
                  cols="70"
                  placeholder="Enter Description...."
                ></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button @click="toggle()">Cancel</button>
              <button @click="creating ? onPostCreate() : onPostUpdate()">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CategoryModal from "./CategoryModal.vue";
export default {
  components: {
    categoryModal: CategoryModal
  },
  data() {
    return {
      id: 0,
      title: "",
      description: "",
      category: []
    };
  },
  props: {
    creating: Boolean,
    showModal: Boolean,
    toggleModal: Function,
    currentPost: Object
  },
  methods: {
    toggle() {
      this.toggleModal();
    },
    onPostCreate() {
      this.$store.commit("addPost", {
        id: ++this.id,
        title: this.title,
        description: this.description,
        categories: this.category
      });
      this.toggleModal();
    },
    onPostUpdate() {
      this.$store.commit("editPost", {
        id: this.currentPost.id,
        title: this.title,
        categories: [...this.category],
        description: this.description
      });
      this.toggleModal();
    }
  },
  watch: {
    currentPost() {
      if (!this.creating) {
        this.title = this.currentPost.title;
        this.category = [...this.currentPost.categories];
        this.description = this.currentPost.description;
      } else {
        this.title = "";
        this.category = [];
        this.description = "";
      }
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.post-modal-container {
  width: 700px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  padding-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  background-color: orange;
}

.modal-header h3 {
  margin-top: 0;
  color: white;
  text-align: left;
  padding: 10px;
}

.modal-body {
  margin: 20px 0;
}

.first-content {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.second-content {
  margin-top: 10px;
  display: flex;
  width: 100%;
  padding: 10px;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .post-modal-container,
.modal-leave-active .post-modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-footer {
  display: flex;
  justify-content: end;
  padding-right: 10px;
}

.modal-footer button {
  background-color: orange;
  margin-right: 5px;
  padding: 10px;
}
</style>
