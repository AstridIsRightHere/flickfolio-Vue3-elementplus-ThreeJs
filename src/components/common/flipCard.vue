<template>
  <div class="flip-card" @click="goToDetail">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="poster" alt="Movie Poster" class="poster-image" />
      </div>
      <div class="flip-card-back">
        <img :src="poster" alt="Movie Poster" class="poster-image-back" />
        <div class="overlay">
          <p class="title">{{ title }}</p>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  poster: String,
  title: String,
  description: String,
  movieId: String,
})
const goToDetail = () => {
  if (props.movieId) {
    router.push({ name: 'MovieDetails', params: { id: props.movieId } })
  } else {
    console.error('Missing required param "id"')
  }
}
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg) scale(1.1);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  background: linear-gradient(120deg, #7c90b0 30%, #a0b0c8 88%, #c2cfe8 40%, #ffffff 78%);
  color: #13227a;
  transform: rotateY(180deg);
  position: relative;
  overflow: hidden;
}
.poster-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /*确保图片填充整个区域而不变形*/
}

.poster-image-back {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  filter: blur(3px); /* 应用模糊效果 */
  z-index: 1;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  z-index: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title,
p {
  margin: 5px 0;
}
</style>
