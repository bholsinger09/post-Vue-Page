<template>
  <div class="food-search">
    <form @submit.prevent="handleSubmit" class="search-form">
      <input type="text" v-model="query">
      <button type="submit">YUM!!</button>
      <div>
        {{error}}
      </div>
    </form>
    <div class="search-results">
      <div class="food-item" v-for="item in results" :key="item.food_name">
        <img :src="item.photo.thumb" height="80" alt>
        <span>{{item.food_name}}</span>
        <span>{{item.nf_calories}}</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "FoodSearch",
    data() {
      return {
        query: "",
        results: [],
        error: ""
      };
    },
    methods: {

    }
  };





</script>