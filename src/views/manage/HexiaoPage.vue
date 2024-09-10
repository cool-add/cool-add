// 核销管理页
<script setup></script>
<template>
  <el-card class="page-container">
    <div class="btn">
      <el-button type="primary">导出名单</el-button>

      <el-button type="warning">导入名单</el-button>

      <el-button type="danger">未通过</el-button>
      <el-button color="#7f24d6">打印</el-button>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  max-width: 2000px;
  min-height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
