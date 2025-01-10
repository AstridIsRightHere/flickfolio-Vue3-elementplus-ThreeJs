<template>
  <button class="cssbuttons-io-button" @click="goBack">
    Back
    <div class="icon">
      <svg
        t="1735106137264"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4405"
        width="24"
        height="24"
      >
        <path
          d="M156.608 487.8592c1.156267-1.137067 2.648533-1.6224 3.918933-2.558933l306.666667-301.569067c13.195733-12.970667 34.586667-12.970667 47.781333 0 13.194667 12.978133 13.194667 34.013867 0 46.987733L263.3024 478.210133l579.2032 0c18.978133 0 34.362667 15.128533 34.362667 33.789867 0 18.6624-15.384533 33.793067-34.362667 33.793067L263.3024 545.793067l251.671467 247.486933c13.194667 12.971733 13.194667 34.010667 0 46.984533-13.194667 12.974933-34.586667 12.974933-47.781333 0l-306.666667-301.5616c-1.269333-0.939733-2.762667-1.421867-3.918933-2.562133-6.334933-6.2304-9.240533-14.340267-9.477333-22.5024C147.367467 502.200533 150.273067 494.090667 156.608 487.8592L156.608 487.8592zM156.608 487.8592"
          fill="#272636"
          p-id="4406"
        ></path>
      </svg>
    </div>
  </button>
</template>

<style scoped>
.cssbuttons-io-button {
  background: #ffffff;
  color: rgb(0, 0, 0);
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 600;
  border-radius: 0.9em;
  border: 2px solid #323232; /* 黑色边框 */
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: 4px 4px #323232; /* 黑色阴影 */
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;
}

.cssbuttons-io-button .icon {
  background: #cdea9a;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  border: 2px solid #323232; /* 黑色边框 */
  box-shadow: 2px 2px #323232;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #323232; /* 黑色 */
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}
</style>

<script setup>
import { useRouter } from 'vue-router'

// 使用 useRouter 钩子
const router = useRouter()

// 定义 goBack 方法
function goBack() {
  router.back()
}
</script>
