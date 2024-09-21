<script setup></script>
<template>
  <page-container title="公告管理">
    <template #extra>
      <el-button type="primary" @click="publishAnnouncement"
        >发布公告</el-button
      >
    </template>
    <AnnouncementList />
  </page-container>
</template>

<style lang="scss" scoped></style>
