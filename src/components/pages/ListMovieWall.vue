<template>
  <div class="movie-wall">
    <flipCard
      v-for="movie in movies"
      :key="movie.id"
      :poster="movie.poster"
      :title="movie.title"
      :description="movie.description"
      :movieId="movie.id.toString()"
      v-lazy:background-image="movie.poster"
    />
  </div>
  <BackToTop></BackToTop>
</template>

<script setup>
import { ref } from 'vue'
import BackToTop from '@/components/common/backToTop.vue'
import flipCard from '../common/flipCard.vue'
import moviesData from '@/assets/text/ListMovieWall.js'
const movies = ref(moviesData)
</script>

<style scoped>
.movie-wall {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
