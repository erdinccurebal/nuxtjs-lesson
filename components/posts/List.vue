<template>
  <div class="col-lg-9">
    <!-- <div class="row">
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
    </div> -->
    <div v-for="post in posts" :key="post.id">{{ post.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>
