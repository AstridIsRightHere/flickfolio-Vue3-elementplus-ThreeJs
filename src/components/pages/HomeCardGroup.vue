<template>
  <HomeCard :items="items" :onCardClick="goToDetail" />
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HomeCard from './HomeCard.vue'
import TheGrandBudapestHotel from '@/assets/card/TheGrandBudapestHotel.jpg'
import LaLaLand from '@/assets/card/LaLaLand.jpg'
import TheGreatGatsby from '@/assets/card/TheGreatGatsby.jpg'
import DeadPoetsSociety from '@/assets/card/DeadPoetsSociety.jpg'
import ForrestGump from '@/assets/card/ForrestGump.jpg'
import TheShawshankRedemption from '@/assets/card/TheShawshankRedemption.jpg'
import HarryPotter from '@/assets/card/HarryPotter.jpg'
import TheWanderingEarth from '@/assets/card/TheWanderingEarth.jpg'

export default {
  components: {
    HomeCard,
  },
  setup() {
    const items = ref([
      {
        id: '1',
        title: '布达佩斯大饭店',
        releaseDate: '2014-03-28',
        rating: 4.6,
        image: TheGrandBudapestHotel,
      },
      {
        id: '2',
        title: '爱乐之城',
        releaseDate: '2016-12-25',
        rating: 4.2,
        image: LaLaLand,
      },
      {
        id: '3',
        title: '了不起的盖茨比',
        releaseDate: '2013-05-10',
        rating: 4.0,
        image: TheGreatGatsby,
      },
      {
        id: '4',
        title: '死亡诗社',
        releaseDate: '1989-06-09',
        rating: 4.6,
        image: DeadPoetsSociety,
      },
      {
        id: '5',
        title: '阿甘正传',
        releaseDate: '1994-07-06',
        rating: 4.9,
        image: ForrestGump,
      },
      {
        id: '6',
        title: '肖申克的救赎',
        releaseDate: '1994-07-06',
        rating: 5.0,
        image: TheShawshankRedemption,
      },
      {
        id: '7',
        title: '哈利·波特与魔法石',
        releaseDate: '2001-11-04',
        rating: 4.8,
        image: HarryPotter,
      },
      {
        id: '8',
        title: '流浪地球2',
        releaseDate: '2023-01-22',
        rating: 4.1,
        image: TheWanderingEarth,
      },
    ])
    const router = useRouter()
    const goToDetail = (item) => {
      if (item && item.id) {
        // 确保 item 和 item.id 存在，并且将 item.id 转换为字符串
        router.push({ name: 'MovieDetails', params: { id: item.id.toString() } })
      } else {
        console.error('Missing required param "id"')
      }
    }
    return {
      items,
      goToDetail,
    }
  },
}
</script>
