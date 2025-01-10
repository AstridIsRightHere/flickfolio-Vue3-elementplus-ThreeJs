<template>
  <div class="footer">
    <div class="loader"></div>
    <el-divider></el-divider>
    <span>法律声明</span>
    <el-divider direction="vertical"></el-divider>
    <span>友情链接</span>
    <el-divider direction="vertical"></el-divider>
    <span @click="drawer = true">联系我</span>
    <br /><br />
    <span class="copyright">版权所有 Astrid</span>

    <el-drawer title="联系我" v-model="drawer" :direction="direction" :before-close="handleClose">
      <p class="info">
        <el-icon class="icon"><Phone /></el-icon>电话：12345678901<br />
        <el-icon class="icon"><Message /></el-icon>邮箱：this_is_astrid@qq.com<br />
        <el-icon class="icon"><IconGithubLogo></IconGithubLogo></el-icon
        >github：https://github.com/AstridIsRightHere<br />
        <el-icon class="icon"><IconGitlabLogo></IconGitlabLogo></el-icon
        >gitgud：https://gitgud.io/Astrid000<br />
      </p>
      <footerDog></footerDog>
      <div class="marquee">
        <div class="marquee-content">
          <span>广告位招租</span>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<style>
.footer {
  height: 150px;
  text-align: center;
  font-size: 16px;
  padding: 0px 100px;
  position: relative;
  cursor: pointer;
}
.copyright {
  font-size: 12px;
}
.info {
  text-align: left;
  font-size: 14px;
  color: #72767b;
  line-height: 30px;
}
.loader {
  left: 5%;
  width: 48px;
  height: 48px;
  position: relative;
  animation: moveRightLeft 10s linear infinite;
}
.loader:before {
  content: '';
  width: 48px;
  height: 5px;
  background: #999;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: shadow324 0.5s linear infinite;
}
.loader:after {
  content: '';
  width: 100%;
  height: 100%;
  background-color: #13227a;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: jump7456 0.5s linear infinite;
}
.info .icon {
  margin: 2%;
  transform: translateY(15%);
}
@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow324 {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
@keyframes moveRightLeft {
  0%,
  100% {
    left: 5%;
  }
  50% {
    left: 95%;
  }
}
/* 确保抽屉的z-index高于熊的图形 */
.el-drawer {
  z-index: 1500;
}

.marquee {
  position: absolute;
  bottom: 3vh;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
}
.marquee-content {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 5s linear infinite;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>

<script>
import IconGithubLogo from '@/components/icons/IconGithubLogo.vue'
import IconGitlabLogo from '@/components/icons/IconGitlabLogo.vue'
import footerDog from '@/components/common/footerDog.vue'
export default {
  components: {
    IconGithubLogo,
    IconGitlabLogo,
    footerDog,
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    }
  },
  methods: {
    handleClose(done) {
      done()
    },
  },
}
</script>
