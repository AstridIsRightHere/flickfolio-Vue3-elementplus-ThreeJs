<script setup>
import '@/assets/navBar.css'
import goBackButton from '@/components/common/goBack_Button.vue'
import BackToTop from '@/components/common/backToTop.vue'
import navBar from '@/components/common/navBar.vue'
import footerBar from '@/components/common/footerBar.vue'
import MovieIntro from '@/components/pages/MovieIntro.vue'
</script>

<template>
  <div class="common-layout">
    <BackToTop></BackToTop>
    <el-container>
      <el-header class="el-header">
        <navBar class="navBar"></navBar>
      </el-header>
      <el-main class="el-main">
        <goBackButton class="gobackbutton"></goBackButton>
        <MovieIntro></MovieIntro>
      </el-main>
      <el-footer>
        <footerBar></footerBar>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.gobackbutton {
  position: fixed;
  z-index: 2000;
}
</style>
