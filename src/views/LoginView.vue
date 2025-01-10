<script setup>
import '@/assets/navBar.css'
import LoginThreeJs from '@/components/pages/LoginThreeJs.vue'
import LoginSignup from '@/components/pages/LoginSignup.vue'
import goBackButton from '@/components/common/goBack_Button.vue'
</script>

<template>
  <div class="common-layout">
    <LoginThreeJs class="model"></LoginThreeJs>
    <LoginSignup></LoginSignup>
    <goBackButton class="goback"></goBackButton>
  </div>
</template>

<style scoped>
.common-layout {
  padding: 0 1vh 0 1vh;
  background-color: #eadf9a;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.model {
  width: 50vw;
}
.goback {
  position: fixed;
  top: 2vh;
  left: 2vw;
}
</style>
