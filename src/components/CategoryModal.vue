<template>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="category-modal-container">
            <div class="modal-header">
              <h3>CREATE CATEGORY</h3>
            </div>

            <div class="modal-body">
              <div class="first-content">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  v-model="name"
                  placeholder="Type Category Name"
                />
              </div>
            </div>

            <div class="modal-footer">
              <button @click="toggle()">Cancel</button>
              <button
                @click="creating ? onCategoryCreate() : onCategoryUpdate()"
              >
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
export default {
  data() {
    return {
      id: 0,
      name: ""
    };
  },
  props: {
    creating: Boolean,
    showModal: Boolean,
    toggleModal: Function,
    currentCategory: Object
  },
  methods: {
    toggle() {
      this.toggleModal();
    },
    onCategoryCreate() {
      this.$store.commit("addCategory", {
        id: ++this.id,
        name: this.name
      });
      this.toggleModal();
    },
    onCategoryUpdate() {
      this.$store.commit("editCategory", {
        ...this.currentCategory,
        name: this.name
      });
      this.toggleModal();
    }
  },
  watch: {
    currentCategory() {
      if (!this.creating) {
        this.name = this.currentCategory.name;
      } else {
        this.name = "";
      }
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

.category-modal-container {
  width: 300px;
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
  padding: 10px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .category-modal-container,
.modal-leave-active .category-modal-container {
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
