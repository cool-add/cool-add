<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 控制弹窗的可见性
const dialogVisible = ref(false)

// 公告发布表单数据
const articleForm = ref({
  title: '',
  content: '',
  publishDate: ''
})

// 表单验证规则
const rules = {
  title: [{ required: true, message: '请输入公告标题', trigger: 'blur' }],
  content: [{ required: true, message: '请输入公告内容', trigger: 'blur' }],
  publishDate: [
    { required: true, message: '请选择发布日期', trigger: 'change' }
  ]
}

// 表单引用
const articleFormRef = ref(null)

// 关闭弹窗时清除表单数据
const handleClose = () => {
  articleForm.value = { title: '', content: '', publishDate: '' }
}

// 提交公告发布
const submitArticle = () => {
  // 验证表单
  articleFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        // 发送 POST 请求发布公告
        const response = await axios.post(
          'http://120.77.178.195:8088/article/publish',
          {
            title: articleForm.value.title,
            content: articleForm.value.content,
            publishDate: articleForm.value.publishDate
          }
        )

        // 检查响应状态
        if (response.data.code === 0) {
          ElMessage({
            type: 'success',
            message: '公告发布成功！'
          })
          dialogVisible.value = false // 关闭弹窗
          handleClose() // 清空表单
        }
      } catch (error) {
        // 错误处理
        ElMessage({
          type: 'error',
          message: '发布失败，请稍后再试'
        })
      }
    } else {
      console.log('表单验证失败')
    }
  })
}
</script>

<template>
  <div class="btn">
    <!-- 发布公告按钮 -->
    <el-button type="primary" @click="dialogVisible = true">发布公告</el-button>

    <!-- 发布公告的弹窗 -->
    <el-dialog
      title="发布公告"
      v-model="dialogVisible"
      width="500px"
      :before-close="handleClose"
    >
      <el-form
        :model="articleForm"
        :rules="rules"
        ref="articleFormRef"
        label-width="80px"
      >
        <!-- 公告标题 -->
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="articleForm.title"
            placeholder="请输入公告标题"
          ></el-input>
        </el-form-item>

        <!-- 公告内容 -->
        <el-form-item label="内容" prop="content">
          <el-input
            type="textarea"
            v-model="articleForm.content"
            placeholder="请输入公告内容"
          ></el-input>
        </el-form-item>

        <!-- 公告发布日期 -->
        <el-form-item label="发布日期" prop="publishDate">
          <el-date-picker
            v-model="articleForm.publishDate"
            type="datetime"
            placeholder="选择发布日期和时间"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DDTHH:mm:ss"
          ></el-date-picker>
        </el-form-item>
      </el-form>

      <!-- 弹窗底部的操作按钮 -->
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitArticle">发布</el-button>
      </template>
    </el-dialog>
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
