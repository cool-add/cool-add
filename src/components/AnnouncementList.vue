<template>
  <el-table :data="announcements" style="width: 100%">
    <el-table-column prop="title" label="公告标题" width="180">
    </el-table-column>
    <el-table-column prop="content" label="公告内容"> </el-table-column>
    <el-table-column prop="date" label="发布日期" width="180">
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-button size="mini" @click="revoke(scope.row)">撤销</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="deleteAnnouncement(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AnnouncementList',
  setup() {
    const announcements = ref([
      {
        title: '广西警察学院校园风光',
        content:
          '学校的建筑风格独特，既有现代感又不失庄重，让人一眼就能感受到警察的威严和正义...',
        date: '2024-06-05'
      },
      {
        title: '广西警察学院校园风光',
        content:
          '学校的建筑风格独特，既有现代感又不失庄重，让人一眼就能感受到警察的威严和正义...',
        date: '2024-06-05'
      },
      {
        title: '广西警察学院校园风光',
        content:
          '学校的建筑风格独特，既有现代感又不失庄重，让人一眼就能感受到警察的威严和正义...',
        date: '2024-06-05'
      },
      {
        title: '广西警察学院校园风光',
        content:
          '学校的建筑风格独特，既有现代感又不失庄重，让人一眼就能感受到警察的威严和正义...',
        date: '2024-06-05'
      },
      {
        title: '广西警察学院校园风光',
        content:
          '学校的建筑风格独特，既有现代感又不失庄重，让人一眼就能感受到警察的威严和正义...',
        date: '2024-06-05'
      },
      {
        title: '广西警察学院校园风光',
        content:
          '学校的建筑风格独特，既有现代感又不失庄重，让人一眼就能感受到警察的威严和正义...',
        date: '2024-06-05'
      },
      {
        title: '广西警察学院校园风光',
        content:
          '学校的建筑风格独特，既有现代感又不失庄重，让人一眼就能感受到警察的威严和正义...',
        date: '2024-06-05'
      }
      // 可以添加更多公告
    ])

    const publishAnnouncement = () => {
      // 实现发布公告的逻辑
      console.log('发布公告')
    }

    const revoke = (announcement) => {
      // 实现撤销公告的逻辑
      console.log('撤销公告', announcement)
    }

    const deleteAnnouncement = (announcement) => {
      // 实现删除公告的逻辑
      console.log('删除公告', announcement)
    }

    return {
      announcements,
      publishAnnouncement,
      revoke,
      deleteAnnouncement
    }
  }
})
</script>
