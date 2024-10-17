<template>
  <el-table :data="announcements" style="width: 100%">
    <el-table-column prop="title" label="公告标题" width="180">
    </el-table-column>
    <el-table-column prop="content" label="公告内容"> </el-table-column>
    <el-table-column prop="date" label="发布日期" width="180">
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-button size="mini" @click="revoke(scope.row.id)">撤销</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="deleteAnnouncement(scope.row.id)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { DeleteNoticeAPI, getNoticeAPI, RevokeAPI } from '@/api/notice'
import { ElMessage, ElMessageBox } from 'element-plus'

export default defineComponent({
  name: 'AnnouncementList',
  setup() {
    const announcements = ref([
      {
        id: '1',
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

    // 获取公告列表
    const getNoticeData = ref([])
    const getNotice = async () => {
      const res = getNoticeAPI()
      getNoticeData.value = res.data
      console.log(getNoticeData)
    }
    getNotice()

    // 删除公告
    const deleteNotice = async (row) => {
      // 提示用户是否要删除
      await ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await DeleteNoticeAPI(row.id)
      ElMessage.success('删除成功')
    }

    // 撤销公告
    const Revoke = async (row) => {
      // 提示用户是否要删除
      await ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await RevokeAPI(row.id)
      ElMessage.success('删除成功')
    }

    return {
      announcements,
      publishAnnouncement,
      revoke,
      getNoticeData,
      getNotice,
      deleteNotice,
      Revoke,
      deleteAnnouncement
    }
  }
})
</script>
