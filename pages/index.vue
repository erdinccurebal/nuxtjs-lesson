<template>
  <PostsList @xxxx="savePost($event)"  />
</template>

<script>
export default {
  methods: {
    savePost(event){
      console.log(event)
    }
  }
}
</script>