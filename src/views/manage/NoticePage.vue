<script setup></script>

<template>
  <div class="btn">
    <el-button type="primary" @click="publishAnnouncement">发布公告</el-button>
  </div>
  <el-card>
    <AnnouncementList />
  </el-card>
</template>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>
