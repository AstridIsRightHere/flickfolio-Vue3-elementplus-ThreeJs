import TheGrandBudapestHotel from '@/assets/card/TheGrandBudapestHotel.jpg'
import LaLaLand from '@/assets/card/LaLaLand.jpg'
import TheGreatGatsby from '@/assets/card/TheGreatGatsby.jpg'
import DeadPoetsSociety from '@/assets/card/DeadPoetsSociety.jpg'
import ForrestGump from '@/assets/card/ForrestGump.jpg'
import TheShawshankRedemption from '@/assets/card/TheShawshankRedemption.jpg'
import HarryPotter from '@/assets/card/HarryPotter.jpg'
import TheWanderingEarth from '@/assets/card/TheWanderingEarth.jpg'
import Inception from '@/assets/card/Inception.jpg'
import Interstellar from '@/assets/card/Interstellar.jpg'
import Titanic from '@/assets/card/Titanic.jpg'
import SpiritedAway from '@/assets/card/SpiritedAway.jpg'
import ThreeIdiots from '@/assets/card/3Idiots.jpg'
import Leon from '@/assets/card/Leon.jpg'
import TheTrumanShow from '@/assets/card/TheTrumanShow.jpg'
import ABeautifulMind from '@/assets/card/ABeautifulMind.jpg'
import TheGodfather from '@/assets/card/TheGodfather.jpg'
import SchindlersList from '@/assets/card/SchindlersList.jpg'
import TheLordoftheRingsTheReturnoftheKing from '@/assets/card/TheLordoftheRingsTheReturnoftheKing.jpg'
import TheMatrix from '@/assets/card/TheMatrix.jpg'
import ThePursuitofHappyness from '@/assets/card/ThePursuitofHappyness.jpg'
import RomanHoliday from '@/assets/card/RomanHoliday.jpg'
import AChineseOdysseyPartTwoCinderella from '@/assets/card/AChineseOdysseyPartTwoCinderella.jpg'
import InfernalAffairs from '@/assets/card/InfernalAffairs.jpg'

const movies = [
  {
    id: 1,
    poster: TheGrandBudapestHotel,
    title: '布达佩斯大饭店',
    description: '《布达佩斯大饭店》是一部由韦斯·安德森执导的喜剧剧情片。',
  },
  {
    id: 2,
    poster: LaLaLand,
    title: '爱乐之城',
    description: '《爱乐之城》是一部由达米恩·查泽雷执导的音乐浪漫剧情片。',
  },
  {
    id: 3,
    poster: TheGreatGatsby,
    title: '了不起的盖茨比',
    description: '《了不起的盖茨比》是根据F·司各特·菲茨杰拉德的同名小说改编的爱情剧情片。',
  },
  {
    id: 4,
    poster: DeadPoetsSociety,
    title: '死亡诗社',
    description: '《死亡诗社》是一部由彼得·威尔执导的剧情片，讲述了一位非传统教师的故事。',
  },
  {
    id: 5,
    poster: ForrestGump,
    title: '阿甘正传',
    description:
      '《阿甘正传》是一部由罗伯特·泽米吉斯执导的剧情片，讲述了一个智力有限的人的非凡人生。',
  },
  {
    id: 6,
    poster: TheShawshankRedemption,
    title: '肖申克的救赎',
    description:
      '《肖申克的救赎》是一部由弗兰克·德拉邦特执导的剧情片，讲述了一个被冤枉谋杀的银行家的故事。',
  },
  {
    id: 7,
    poster: HarryPotter,
    title: '哈利·波特系列',
    description: '《哈利·波特》系列是一部奇幻冒险电影，讲述了一个年轻巫师的成长故事。',
  },
  {
    id: 8,
    poster: TheWanderingEarth,
    title: '流浪地球',
    description: '《流浪地球》是一部中国科幻片，讲述了地球面临灾难时人类的生存挑战。',
  },
  {
    id: 9,
    poster: Inception,
    title: '盗梦空间',
    description: '《盗梦空间》是一部由克里斯托弗·诺兰执导的科幻悬疑片，探讨了梦境与现实的界限。',
  },
  {
    id: 10,
    poster: Interstellar,
    title: '星际穿越',
    description:
      '《星际穿越》是一部由克里斯托弗·诺兰执导的科幻冒险片，讲述了一组宇航员穿越虫洞寻找新家园的故事。',
  },
  {
    id: 11,
    poster: Titanic,
    title: '泰坦尼克号',
    description:
      '《泰坦尼克号》是一部由詹姆斯·卡梅隆执导的爱情灾难片，讲述了泰坦尼克号沉船事件中的爱情故事。',
  },
  {
    id: 12,
    poster: SpiritedAway,
    title: '千与千寻',
    description: '《千与千寻》是一部由宫崎骏执导的动画奇幻片，讲述了一个小女孩在神秘世界的冒险。',
  },
  {
    id: 13,
    poster: ThreeIdiots,
    title: '三傻大闹宝莱坞',
    description: '《三傻大闹宝莱坞》是一部印度喜剧剧情片，探讨了教育体制和个人追求。',
  },
  {
    id: 14,
    poster: Leon,
    title: '这个杀手不太冷',
    description:
      '《这个杀手不太冷》是一部由吕克·贝松执导的动作剧情片，讲述了一个职业杀手与一个小女孩之间的特殊关系。',
  },
  {
    id: 15,
    poster: TheTrumanShow,
    title: '楚门的世界',
    description:
      '《楚门的世界》是一部由彼得·威尔执导的剧情片，讲述了一个男子发现自己的整个生活都是一场电视节目的故事。',
  },
  {
    id: 16,
    poster: ABeautifulMind,
    title: '美丽心灵',
    description: '《美丽心灵》是一部由朗·霍华德执导的传记剧情片，讲述了数学家约翰·纳什的生平。',
  },
  {
    id: 17,
    poster: TheGodfather,
    title: '教父',
    description:
      '《教父》是一部由弗朗西斯·福特·科波拉执导的犯罪剧情片，讲述了一个意大利裔美国黑手党家族的故事。',
  },
  {
    id: 18,
    poster: SchindlersList,
    title: '辛德勒的名单',
    description:
      '《辛德勒的名单》是一部由史蒂文·斯皮尔伯格执导的历史剧情片，讲述了一个德国商人在二战期间拯救犹太人的故事。',
  },
  {
    id: 19,
    poster: TheLordoftheRingsTheReturnoftheKing,
    title: '指环王：王者归来',
    description:
      '《指环王：王者归来》是一部由彼得·杰克逊执导的奇幻冒险片，讲述了中土世界中对抗邪恶的史诗故事。',
  },
  {
    id: 20,
    poster: TheMatrix,
    title: '黑客帝国',
    description: '《黑客帝国》是一部由沃卓斯基兄弟执导的科幻动作片，探讨了现实与虚拟世界的界限。',
  },
  {
    id: 21,
    poster: ThePursuitofHappyness,
    title: '当幸福来敲门',
    description:
      '《当幸福来敲门》是一部由加布里尔·穆奇诺执导的剧情片，讲述了一个单亲父亲奋斗成为股票经纪人的故事。',
  },
  {
    id: 22,
    poster: RomanHoliday,
    title: '罗马假日',
    description: '《罗马假日》是一部由威廉·惠勒执导的爱情喜剧片，讲述了一个公主在罗马的一日冒险。',
  },
  {
    id: 23,
    poster: AChineseOdysseyPartTwoCinderella,
    title: '大话西游之大圣娶亲',
    description:
      '《大话西游之大圣娶亲》是一部中国喜剧奇幻片，以西游记为背景，讲述了孙悟空的爱情故事。',
  },
  {
    id: 24,
    poster: InfernalAffairs,
    title: '无间道',
    description: '《无间道》是一部香港犯罪剧情片，讲述了警察与黑帮之间的卧底故事。',
  },
];

export default movies;
