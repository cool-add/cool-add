<template>
  <el-card class="page-container">
    <template #header>
      <div class="card-header">
        <span>申请人信息</span>
      </div>
      <div class="btn">
        <el-button type="primary">导出名单</el-button>
        <el-button type="warning">导入名单</el-button>
        <el-button type="danger">未通过</el-button>
        <el-button color="#7f24d6">打印</el-button>
      </div>
      <p v-for="o in 10" :key="o" class="text item">{{ 'List item' + o }}</p>
    </template>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  max-width: 2000px;
  min-height: 100%;
  box-sizing: border-box;
  .card-header {
    margin-top: 0;

    span {
      font-size: 15px;
      font-weight: 600;
    }
  }
}
.btn {
  margin: 10px 30px;
}
</style>
