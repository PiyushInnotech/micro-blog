<template>
  <div class="cardWrapper">
    <blogCard v-for="blog in blogs" :key="blog.id">
      <template v-slot:description>{{ blog.title }}</template>
      <template v-slot:content>{{ blog.description }}</template>
      <template v-slot:footer>
        <div class="likes">
          <div class="icon" @click="increaseLike(blog.id)">
          <i class="fa-sharp fa-solid fa-heart"></i>
          </div>
          <p>{{ blog.like }}</p>
        </div>
        <div v-for="topic in blog.topics" :key="topic.id" class="topics">
          #{{ topic }}
        </div>
      </template>
    </blogCard>
  </div>
</template>

<script>
import { blogData } from "./components/blogData";
import blogCard from "./components/card.vue";
export default {
  name: "App",
  components: { blogCard },
  setup() {
    const { blogs , increaseLike } = blogData();

    return { blogs , increaseLike };
  },
};
</script>

<style>
</style>
