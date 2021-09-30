<template>
  <div>
    <div class="post-content-first">
      <div class="allPost">
        All Post
      </div>
      <div>
        <button class="post-button" @click="createPost">
          +CREATE POST
        </button>
      </div>
    </div>

    <div class="post-content-second">
      <div>Title</div>
      <div>Action</div>
    </div>

    <hr />

    <div class="post-content-third" v-for="(post, index) in posts" :key="index">
      <div>{{ post.title }}</div>
      <div>
        <span>
          <button @click="viewPost(post)">View</button>
        </span>
        <span>
          <button @click="editPost(post)">Edit</button>
        </span>
        <span>
          <button @click="deletePost(post)">Delete</button>
        </span>
      </div>
    </div>

    <modal
      :creating="creating"
      :currentPost="currentPost"
      :showModal="showModal"
      :toggleModal="toggleModal"
    ></modal>

    <viewPostModal
      :currentPost="currentPost"
      :showModal="showViewModal"
      :toggleModal="toggleViewModal"
    ></viewPostModal>
  </div>
</template>

<script>
import Modal from "./PostModal.vue";
import ViewPostModal from "./ViewPostModal.vue";

export default {
  components: {
    modal: Modal,
    viewPostModal: ViewPostModal
  },
  data() {
    return {
      creating: true,
      currentPost: {},
      showModal: false,
      showViewModal: false
    };
  },
  methods: {
    createPost() {
      this.creating = true;
      this.currentPost = {};
      this.toggleModal();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    viewPost(post) {
      this.currentPost = { ...post };
      this.toggleViewModal();
    },
    toggleViewModal() {
      this.showViewModal = !this.showViewModal;
    },
    editPost(post) {
      this.creating = false;
      this.currentPost = { ...post };
      this.toggleModal();
    },
    deletePost(post) {
      this.$store.commit("deletePost", post);
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style>
.post-content-first {
  margin-top: 50px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.allPost {
  font-size: 20px;
}

.post-button {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
}

.post-content-second {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post-content-third {
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
