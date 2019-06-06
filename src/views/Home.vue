<template>
  <div class="home">
    <div>
      <h3>Daily Post Creater</h3>
      <post-creator />
    </div>

    <div>
      <h3>Post list Template</h3>
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