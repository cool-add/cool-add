<script setup></script>

<template>
  <el-header>
    <div>
      <span style="font-weight: bold; color: black">8</span
      ><span>访客待审核</span>
    </div>
    <div>
      <span style="font-weight: bold; color: black">8</span
      ><span>访客已审核</span>
    </div>
    <div>
      <span style="font-weight: bold; color: black">8</span
      ><span>访客未通过</span>
    </div>
    <div>
      <span style="font-weight: bold; color: black">8</span
      ><span>访客已访问</span>
    </div>
    <div>
      <span style="font-weight: bold; color: black">8</span
      ><span>总访客人数</span>
    </div>
  </el-header>

  <el-row :gutter="20">
    <el-col :span="8">
      <el-card>
        <template v-slot:header>
          <div class="clearfix">
            <span>待访客</span>
          </div>
        </template>
        <div class="stat-item">
          <span>65</span>
          <el-button type="text" @click="viewDetails">查看详细</el-button>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <template v-slot:header>
          <div class="clearfix">
            <span>已访问</span>
          </div>
        </template>
        <div class="stat-item">
          <span>65</span>
          <el-button type="text" @click="viewDetails">查看详细</el-button>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <template v-slot:header>
          <div class="clearfix">
            <span>访客管理</span>
          </div>
        </template>
        <div class="stat-item">
          <span>65</span>
          <el-button type="text" @click="viewDetails">查看详细</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-card>
    <template #header>
      <div class="card-header">
        <div>访客趋势</div>
        <div class="box1">
          <el-link :underline="false">今日</el-link>
          <el-link :underline="false">本周</el-link>
          <el-link :underline="false">本月</el-link>
          <el-link :underline="false">本年</el-link>
          <el-input v-model="input2" class="w-50" />
        </div>
      </div>
    </template>
    <div class="stats-container">
      <div class="chart-container">
        <BarChart
          :xAxisData="[
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月'
          ]"
          :seriesData="[35, 45, 60, 68, 92, 74, 10, 5, 54]"
        />
      </div>
      <VisitorRankings />
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  height: 9.1875rem;
  div {
    display: block;
    width: 16%;
    text-align: center;
  }
  span {
    display: inline-block;
    width: 100px;
    margin-top: 15px;
  }
}
.stat-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.w-50 {
  width: 330px;
}
.box1 {
  display: flex;
  align-items: center;
  gap: 23px;
}
.stats-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chart-container {
  flex: 1;
}
</style>
