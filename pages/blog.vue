<template>
  <PostsList :posts="posts" />
</template>

<script>
export default {
   layout: "blog",
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
  },
};
</script>