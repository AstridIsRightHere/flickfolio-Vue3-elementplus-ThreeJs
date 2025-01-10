<template>
  <div style="width: 50%; margin-top: 5vh" max-height="50vh">
    <el-card>
      <el-table :data="tableData" max-height="50vh">
        <el-table-column fixed prop="num" label="评分榜" width="70" />
        <el-table-column fixed prop="name" label="电影名" width="150" />
        <el-table-column prop="date" label="上映时间" width="120" />
        <el-table-column prop="state" label="评分" width="70" />
        <el-table-column prop="actor" label="演员" width="120" />
        <el-table-column prop="director" label="导演" width="130" />
        <el-table-column prop="boxOffice" label="票房" width="120" />
      </el-table>
      <el-button class="mt-4" style="width: 100%" @click="onAddItem"> 显示更多 </el-button>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'

const tableData = ref([])

const getRecentMovies = async () => {
  return [
    {
      num: '1',
      date: '2024-12-01',
      name: '星际穿越',
      state: '9.0',
      actor: '马修·麦康纳',
      director: '克里斯托弗·诺兰',
      boxOffice: '2.5亿',
    },
    {
      num: '2',
      date: '2024-12-05',
      name: '盗梦空间',
      state: '8.8',
      actor: '莱昂纳多·迪卡普里奥',
      director: '克里斯托弗·诺兰',
      boxOffice: '3.1亿',
    },
    {
      num: '3',
      date: '2024-11-20',
      name: '阿凡达2：水之道',
      state: '8.9',
      actor: '萨姆·沃辛顿',
      director: '詹姆斯·卡梅隆',
      boxOffice: '5.5亿',
    },
    {
      num: '4',
      date: '2024-12-10',
      name: '信条',
      state: '8.7',
      actor: '约翰·大卫·华盛顿',
      director: '克里斯托弗·诺兰',
      boxOffice: '2.1亿',
    },
    {
      num: '5',
      date: '2024-11-25',
      name: '黑亚当',
      state: '7.5',
      actor: '道恩·强森',
      director: '佐米·希尔拉',
      boxOffice: '1.8亿',
    },
    {
      num: '6',
      date: '2024-12-15',
      name: '勇敢的心',
      state: '8.3',
      actor: '梅尔·吉布森',
      director: '梅尔·吉布森',
      boxOffice: '1.2亿',
    },
    {
      num: '7',
      date: '2024-12-18',
      name: '肖申克的救赎',
      state: '9.3',
      actor: '蒂姆·罗宾斯',
      director: '弗兰克·德拉邦特',
      boxOffice: '1.5亿',
    },
    {
      num: '8',
      date: '2024-12-22',
      name: '这个杀手不太冷',
      state: '9.4',
      actor: '让·雷诺',
      director: '吕克·贝松',
      boxOffice: '1.8亿',
    },
    {
      num: '9',
      date: '2024-12-08',
      name: '美丽人生',
      state: '9.5',
      actor: '罗伯托·贝尼尼',
      director: '罗伯托·贝尼尼',
      boxOffice: '1.0亿',
    },
    {
      num: '10',
      date: '2024-12-20',
      name: '千与千寻',
      state: '9.0',
      actor: '柊瑠美',
      director: '宫崎骏',
      boxOffice: '2.0亿',
    },
  ]
}

// 在组件挂载时获取数据
onMounted(async () => {
  const recentMovies = await getRecentMovies()
  tableData.value = recentMovies.map((movie) => ({
    num: (tableData.value.length + 1).toString(),
    ...movie,
  }))
})

const onAddItem = () => {
  const now = new Date()
  now.setDate(now.getDate() - 1)
  tableData.value.push({
    num: (tableData.value.length + 1).toString(),
    date: dayjs(now).format('YYYY-MM-DD'),
    name: '新电影',
    state: '待评分',
    actor: '待定',
    director: '待定',
    boxOffice: '待定',
  })
}
</script>
