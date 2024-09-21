<template>
  <div class="ranking-container">
    <h2>访客人数排名</h2>
    <ol class="ranking-list">
      <li v-for="(rank, index) in rankings" :key="rank.month">
        <span class="rank-number">{{ index + 1 }}</span>
        <span class="rank-month">{{ rank.month }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VisitorRankings',
  setup() {
    const rankings = [
      { month: '九月', visitors: 54 },
      { month: '六月', visitors: 74 },
      { month: '二月', visitors: 45 },
      { month: '四月', visitors: 68 },
      { month: '五月', visitors: 92 },
      { month: '三月', visitors: 60 }
    ]

    return {
      rankings
    }
  }
})
</script>

<style scoped>
.ranking-container {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}

.ranking-container h2 {
  margin-bottom: 20px;
}

.ranking-list {
  list-style: none;
  padding: 0;
  counter-reset: rank;
}

.ranking-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.rank-number {
  counter-increment: rank;
  margin-right: 20px;
  padding: 4px 8px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  font-weight: bold;
}

.rank-month {
  flex-grow: 1;
}
</style>
