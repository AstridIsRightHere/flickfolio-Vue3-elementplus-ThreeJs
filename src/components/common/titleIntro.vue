<template>
  <div class="title">
    <h2>{{ title }}></h2>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped>
.title {
  margin: 4vh 0 1vh 0;
}
</style>
