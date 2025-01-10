<script>
import LaLaLand from '@/assets/carousel/LaLaLand.jpg'
import LaLaLand2 from '@/assets/carousel/LaLaLand_2.jpg'
import LaLaLand3 from '@/assets/carousel/LaLaLand_3.jpg'
import Whiplash from '@/assets/carousel/Whiplash.jpg'
import DeadPoetsSociets from '@/assets/carousel/DeadPoetsSociets.jpg'
import LesChoristes from '@/assets/carousel/LesChoristes.jpg'
import BohemianRhapsody from '@/assets/carousel/BohemianRhapsody.jpg'

export default {
  data() {
    return {
      sliders: [
        { img: LaLaLand },
        { img: Whiplash },
        { img: DeadPoetsSociets },
        { img: LaLaLand2 },
        { img: LesChoristes },
        { img: LaLaLand3 },
        { img: BohemianRhapsody },
      ],
    }
  },
}
</script>

<template>
  <el-carousel :interval="4000" type="card" autoplay>
    <el-carousel-item v-for="(slider, index) in sliders" :key="index">
      <img :src="slider.img" alt="Slider Image" />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片覆盖整个容器，不失真 */
}
</style>
