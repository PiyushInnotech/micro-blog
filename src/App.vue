<template>
  <form>
    <label>Search HashTag :#</label>
    <input type="text" v-model="searchTag" @keyup="searchHash(searchTag)" />
  </form>
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
          <span @click="hashTag(topic)"># {{ topic }}</span>
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
    const { blogs, increaseLike, hashTag, searchTag, searchHash } = blogData();

    return { blogs, increaseLike, hashTag, searchTag, searchHash };
  },
};
</script>

<style>
</style>
