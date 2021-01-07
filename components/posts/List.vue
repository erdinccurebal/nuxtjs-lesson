<template>
  <div class="col-lg-9">
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img
            class="card-img-top"
            :src="'https://picsum.photos/id/' + post.id + '/200/200'"
          />
          <div class="card-body">
            <h4 class="card-title">
              <NuxtLink to="/" tag="a">{{ post.title }}</NuxtLink>
            </h4>
            <p class="card-text">
              {{ post.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Lorem ipsuk",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ametnumquam aspernatur!",
        },
        {
          id: 2,
          title: "Lorem ipsuk",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ametnumquam aspernatur!",
        },
        {
          id: 3,
          title: "Lorem ipsuk",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ametnumquam aspernatur!",
        },
        {
          id: 4,
          title: "Lorem ipsuk",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ametnumquam aspernatur!",
        },
        {
          id: 5,
          title: "Lorem ipsuk",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ametnumquam aspernatur!",
        },
        {
          id: 6,
          title: "Lorem ipsuk",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ametnumquam aspernatur!",
        },
      ],
    };
  },
  created() {
    this.$emit("xxxx", "Test Message");
  },
  props: ["test"],
};
</script>
