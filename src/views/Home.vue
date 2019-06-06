<template>
  <div class="home">
    <div>
      <h3>Welcome to Your-Blogger</h3>
      <post-creator />
    </div>

    <div>
      <h5 id="post-header">Check out your posts : </h5>
      <post-list />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import PostCreator from "@/components/PostCreator.vue";
  import PostList from "@/components/PostList.vue";

  export default {
    name: 'home',
    components: {
      PostCreator,
      PostList
    }
  };
</script>

<style>
  #post-header {
    margin-top: 3rem;
  }
</style>