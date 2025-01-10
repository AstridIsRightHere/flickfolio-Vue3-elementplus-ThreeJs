<script lang="ts" setup>
import IconMovieLogo from '@/components/icons/IconMovieLogo.vue'
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0"
      ><icon-movie-logo></icon-movie-logo>
      <router-link to="/" index="1"><span class="title">&emsp;FlickFolio</span> 首页</router-link>
    </el-menu-item>

    <el-menu-item index="1">
      <router-link to="/list" index="2">电影墙</router-link>
    </el-menu-item>

    <el-menu-item>
      <router-link to="/login" index="3">登录/注册</router-link>
    </el-menu-item>
  </el-menu>
</template>

<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
