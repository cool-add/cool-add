<template>
  <el-table :data="article" style="width: 100%">
    <el-table-column prop="title" label="公告标题" width="180">
    </el-table-column>
    <el-table-column prop="content" label="公告内容"> </el-table-column>
    <el-table-column prop="date" label="发布日期" width="180">
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-button size="mini" @click="openEditDialog(scope.row)"
          >撤销</el-button
        >
        <el-button size="mini" type="danger" @click="deleteNotice(scope.row.id)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <!-- 编辑公告的弹窗 -->
  <el-dialog
    title="编辑公告"
    :model="editDialogVisible"
    width="50%"
    @close="resetForm"
  >
    <el-form :model="articleForm" label-width="80px">
      <!-- 公告标题 -->
      <el-form-item label="标题">
        <el-input v-model="articleForm.title"></el-input>
      </el-form-item>

      <!-- 公告内容 -->
      <el-form-item label="内容">
        <el-input type="textarea" v-model="articleForm.content"></el-input>
      </el-form-item>

      <!-- 公告发布日期 -->
      <el-form-item label="发布日期">
        <el-date-picker
          v-model="articleForm.publishDate"
          type="datetime"
          placeholder="选择发布日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>

    <!-- 弹窗底部按钮 -->
    <template #footer>
      <el-button @click="editDialogVisible = false">取消</el-button>
      <el-button type="primary" @click="submitArticle">保存</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { DeleteNoticeAPI, getNoticeAPI, RevokeAPI } from '@/api/notice'
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios'

export default defineComponent({
  name: 'AnnouncementList',
  setup() {
    const announcements = ref([])

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

    // 控制编辑公告的对话框显示与隐藏
    const editDialogVisible = ref(false)

    // 用于编辑公告的表单数据
    const articleForm = ref({
      title: '',
      content: '',
      publishDate: ''
    })
    // 重置表单数据
    const resetForm = () => {
      articleForm.value = {
        title: '',
        content: '',
        publishDate: ''
      }
    }

    // 打开编辑公告的对话框并填充数据
    const openEditDialog = (article) => {
      editDialogVisible.value = true
      articleForm.value.title = article.title
      articleForm.value.content = article.content
      articleForm.value.publishDate = article.publishDate
    }

    // 提交编辑后的公告
    const submitArticle = async () => {
      try {
        // 发送 PUT 请求更新公告
        const response = await axios.put(
          `http://120.77.178.195:8088/article/revoke/${articleForm.value.id}`,
          {
            title: articleForm.value.title,
            content: articleForm.value.content,
            publishDate: articleForm.value.publishDate
          }
        )

        if (response.data.code === 200) {
          ElMessage({
            type: 'success',
            message: '公告更新成功'
          })
          // 关闭对话框
          editDialogVisible.value = false
        }
      } catch (error) {
        ElMessage({
          type: 'error',
          message: '更新失败，请稍后重试'
        })
      }
    }

    // 获取公告列表
    const article = ref([])
    const getNotice = async () => {
      const res = await getNoticeAPI()
      article.value = res.data.data
    }
    getNotice()

    // 删除公告
    const deleteNotice = async (id) => {
      // 提示用户是否要删除
      ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      const response = await DeleteNoticeAPI(id)
      if (response.data.code === 200) {
        // 删除成功，在前端移除该公告
        article.value = article.value.filter((article) => article.id !== id)

        ElMessage({
          type: 'success',
          message: '删除成功!'
        })
      }
      getNotice()
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
      articleForm,
      getNotice,
      deleteNotice,
      Revoke,
      deleteAnnouncement,
      article,
      openEditDialog,
      resetForm,
      submitArticle
    }
  }
})
</script>
