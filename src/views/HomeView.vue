<script setup>
import '@/assets/navBar.css'
import BackToTop from '@/components/common/backToTop.vue'
import navBar from '@/components/common/navBar.vue'
import footerBar from '@/components/common/footerBar.vue'
import HomeCarousel from '@/components/pages/HomeCarousel.vue'
import HomeScrollList from '@/components/pages/HomeScrollList.vue'
import HomeCardGroup from '@/components/pages/HomeCardGroup.vue'
import Title from '@/components/common/titleIntro.vue'
</script>

<template>
  <div class="common-layout">
    <BackToTop></BackToTop>
    <el-container>
      <el-header class="el-header">
        <navBar class="navBar"></navBar>
      </el-header>
      <el-main class="el-main">
        <HomeCarousel></HomeCarousel>
        <div class="bottom">
          <HomeScrollList></HomeScrollList>
          <HomeCardGroup></HomeCardGroup>
        </div>
        <Title title="本周最热"></Title>
        <HomeCardGroup></HomeCardGroup>
        <Title title="本月最热"></Title>
        <HomeCardGroup></HomeCardGroup>
        <Title title="评分最高"></Title>
        <HomeCardGroup></HomeCardGroup>
        <Title title="票房最高"></Title>
        <HomeCardGroup></HomeCardGroup>
      </el-main>
      <el-footer>
        <footerBar></footerBar>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.bottom {
  display: flex;
  align-items: center;
}
.common-layout {
  background-color: #ffffff;
  background-image: linear-gradient(180deg, #ffffff 0%, #8bc6ec 39%, #9599e2 75%, #ffffff 100%);
}
</style>
