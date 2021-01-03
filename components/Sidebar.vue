<template>
  <div class="col-lg-3">
    <h3 class="my-4">Kategoriler</h3>
    <div class="list-group">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        tag="a"
        :to="'/kategori/' + category.to"
        class="list-group-item"
        >{{ category.name }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: "Html", to: "html" },
        { id: 2, name: "Css", to: "css" },
        { id: 3, name: "Javascript", to: "javascript" },
      ],
    };
  },
};
</script>
