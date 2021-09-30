<template>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h3>POST DETAILS</h3>
            </div>

            <div class="modal-body">
              <div class="first-content">
                <h2>
                  Title: <span>{{ currentPost.title }}</span>
                </h2>
              </div>

              <div class="second-content">
                <h3>
                  Categories:
                  <span
                    v-for="category in currentPost.categories"
                    :key="category.id"
                  >
                    {{ category.name }}
                  </span>
                </h3>
              </div>

              <div class="third-content">
                <h3>
                  Body: <span>{{ currentPost.description }}</span>
                </h3>
              </div>
            </div>

            <div class="modal-footer">
              <button @click="toggle()">CLOSE</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    toggleModal: Function,
    currentPost: Object
  },
  methods: {
    toggle() {
      this.toggleModal();
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

.modal-container {
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
  text-align: left;
  padding-left: 10px;
  font-display: block;
}

.second-content {
  width: 100%;
}

.second-content h3 {
  font-display: block;
}

.third-content {
  text-align: left;
  padding-left: 10px;
}

.third-content h3 {
  font-display: block;
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

.modal-enter .modal-container,
.modal-leave-active .modal-container {
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
  padding: 10px;
}
</style>
