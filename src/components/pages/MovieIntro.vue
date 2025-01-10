<template>
  <div class="movie-details">
    <img :src="movieDetails.poster" alt="Movie Poster" class="movie-poster" />
    <div class="movie-info">
      <h1>{{ movieDetails.title }}</h1>
      <div class="rating">豆瓣评分: {{ movieDetails.rating }}</div>
      <div class="genres">类型: {{ movieDetails.genres }}</div>
      <div class="runtime">片长: {{ movieDetails.runtime }}</div>
      <div class="language">语言: {{ movieDetails.languages }}</div>
      <div class="director-actors">
        <h2>导演和编剧</h2>
        <ul>
          <li>导演: {{ movieDetails.director }}</li>
          <li>编剧: {{ movieDetails.screenwriters }}</li>
          <li>主演: {{ movieDetails.actors }}</li>
        </ul>
      </div>
      <div class="movie-additional-info">
        <ul>
          <li>
            官方网站:
            <a
              :href="movieDetails.officialSite ? 'http://' + movieDetails.officialSite : '#'"
              target="_blank"
              >{{ movieDetails.officialSite }}</a
            >
          </li>
          <li>制片国家/地区: {{ movieDetails.countries }}</li>
          <li>上映日期: {{ movieDetails.releaseDates }}</li>
          <li>又名: {{ movieDetails.aliases }}</li>
          <li>
            IMDb链接:
            <a :href="'http://www.imdb.com/title/' + movieDetails.imdb" target="_blank">IMDb</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="movie-description">
      <h2>剧情简介</h2>
      <p>{{ movieDetails.description }}</p>
    </div>
    <div class="movie-awards">
      <h2>获奖情况</h2>
      <ul>
        <li v-for="(award, index) in movieDetails.awards" :key="index">{{ award }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import movieData from '@/assets/text/MovieDetailData.js'

const route = useRoute()
const movieId = route.params.id

// 获取电影详情数据
const movieDetails = computed(() => {
  return (
    movieData[movieId] || {
      title: 'Movie Not Found',
      poster: '',
      description: "Sorry, we couldn't find the movie details.",
    }
  )
})
</script>

<style scoped>
.movie-details {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.movie-poster {
  flex: 0 0 50%;
  max-width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.movie-poster:hover {
  transform: scale(0.85);
}
.movie-info {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

@media (max-width: 768px) {
  .movie-poster,
  .movie-info {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.movie-info h1 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 2rem;
}

.rating,
.genres,
.runtime,
.language {
  margin: 0.5rem 0;
  color: #666;
  font-size: 1rem;
}

.director-actors ul,
.movie-additional-info ul {
  list-style-type: none;
  padding: 0;
}

.director-actors li,
.movie-additional-info li {
  margin-bottom: 0.5rem;
  color: #444;
}

.movie-additional-info a {
  color: #3b8b8c;
  text-decoration: none;
}

.movie-additional-info a:hover {
  text-decoration: underline;
}

.movie-description h2,
.movie-awards h2 {
  margin-top: 1rem;
  color: #222;
  font-size: 1.5rem;
}

.movie-description p {
  margin: 1rem 0;
  color: #555;
  line-height: 1.6;
}

.movie-awards ul {
  list-style-type: none;
  padding: 0;
}

.movie-awards li {
  margin-bottom: 0.5rem;
  color: #444;
}
</style>
