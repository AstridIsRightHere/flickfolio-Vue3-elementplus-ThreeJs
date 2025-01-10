<template>
  <el-scrollbar class="scrollbar-container" wrap-class="scrollbar-wrap">
    <el-row :gutter="20" class="scrollbar-content">
      <el-col :span="8" v-for="(item, index) in items" :key="index">
        <el-card shadow="hover" class="scrollbar-card" @click="onCardClick(item)">
          <img :src="item.image" class="image" alt="Card image" />
          <div style="padding: 14px">
            <span>{{ item.title }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.releaseDate }}</time>
              <div class="rating-container">
                <el-rate v-model="item.rating" disabled show-score text-color="#ff9900" />
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },
    onCardClick: {
      type: Function,
      required: true,
    },
  },
})
</script>

<style scoped>
.scrollbar-container {
  overflow-x: auto;
  max-height: 60vh;
  margin: 2vh 0 1vh 2vw;
}

.scrollbar-wrap {
  overflow-x: hidden;
}

.scrollbar-content {
  display: flex;
  flex-wrap: nowrap;
}

.scrollbar-card {
  flex: 0 0 auto;
  margin-right: 1vw;
}

.image {
  width: 100%;
  height: 30vh;
  object-fit: cover;
}

.bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.time {
  color: #72767b;
}

.rating-container {
  width: 100%;
  text-align: right;
}
</style>
