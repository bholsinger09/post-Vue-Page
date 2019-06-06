<template>
  <div class="post-creator">
    <form @submit.prevent="handlePost" class="post-form">
      <input type="text" v-model="post">
      <button type="submit">Post It</button>
    </form>
  </div>
</template>


<script>
  export default {
    name: "PostCreator",
    data() {
      return {
        post: ""
      };
    },
    methods: {
      handlePost() {
        let data = {
          post: this.post


        }
        debugger
        this.$store.dispatch('sendPost', data)
        this.post = ""
      }
    },
    computed: {
      posts() {
        return this.$store.state.posts;
      }
    }
  };

</script>