<template>
  <div class="post-list">
    <!-- <div class="posts" v-for="post in posts" :key="post._id">
      {{post.user}}
    </div> -->
  </div>
</template>

<script>
  export default {
    name: "PostList",
    mounted() {
      //this.$store.dispatch('getPosts')
    },

    computer: {
      posts() {
        return this.$store.state.posts;
      }
    }
  }
</script>