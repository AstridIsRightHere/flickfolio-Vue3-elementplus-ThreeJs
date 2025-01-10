<script setup>
import '@/assets/navBar.css'
import navBar from '@/components/common/navBar.vue'
import footerBar from '@/components/common/footerBar.vue'
import ListMovieWall from '@/components/pages/ListMovieWall.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header">
        <navBar class="navBar"></navBar>
      </el-header>
      <el-main class="el-main">
        <ListMovieWall></ListMovieWall>
      </el-main>
      <el-footer>
        <footerBar></footerBar>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-main {
  padding-bottom: 5vh;
  width: 100%;
  height: 100%;
}
</style>
