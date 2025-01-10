<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const threeContainer = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  // scene.background = null // 无背景

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 5.5, 7)

  const renderer = new THREE.WebGLRenderer({
    antialias: true, // 开启抗锯齿
    alpha: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  threeContainer.value.appendChild(renderer.domElement)

  // 创建一个环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)
  // 创建一个平行光
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(0, 1, 0)
  scene.add(directionalLight)

  // 创建一个GLTFLoader实例
  const loader = new GLTFLoader()
  // 加载模型
  loader.load(
    '/src/assets/magical_find/scene.gltf', // 模型路径
    (gltf) => {
      const model = gltf.scene
      scene.add(model)
    },
    undefined,
    (error) => {
      console.error('An error happened', error)
    },
  )

  // 轨道控制器，使场景可旋转
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true // 启用阻尼效果
  controls.dampingFactor = 0.02 // 阻尼系数
  controls.minPolarAngle = Math.PI / 4
  controls.maxPolarAngle = Math.PI / 2.8
  controls.enableZoom = false

  const animate = () => {
    requestAnimationFrame(animate)
    controls.update() // 仅在需要时更新控制器
    renderer.render(scene, camera)
  }

  animate()

  // 监听窗口大小变化
  window.addEventListener('resize', () => {
    const width = threeContainer.value.clientWidth
    const height = threeContainer.value.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  })
})
</script>

<style>
.three-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
