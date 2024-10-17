<script setup>
import { ref } from 'vue'
import { applicantAPI, artList, getNotAPI } from '@/api/usermanage'
// import ChannelEdit from './components/ChannelEdit.vue'
import axios from 'axios'

const ListData = ref([])
const dialogVisible = ref(false)
const applicant = ref({
  name: '',
  phone: '',
  identityCard: '',
  date: '',
  door: '',
  numberPeople: 1,
  objective: '',
  status: ''
})
// 重置表单
const resetForm = () => {
  applicant.value = {
    name: '',
    phone: '',
    identityCard: '',
    date: '',
    door: '',
    numberPeople: 1,
    objective: '',
    status: ''
  }
}

// 门的映射关系
const doorEnum = {
  1: '东门',
  2: '西门',
  3: '南门',
  4: '北门'
}

// 查询未通过的人员名单
const getNotuser = async () => {
  const res = await getNotAPI()
  ListData.value = res.data.data
}

const getExcel = async () => {
  // 跳转到指定网址
  window.location.href = 'http://120.77.178.195:8088/applicant/export'
}

/// 导入申请人信息
const submitApplicant = async () => {
  try {
    const response = await axios.post(
      'http://120.77.178.195:8088/applicant/add',
      {
        name: applicant.value.name,
        phone: applicant.value.phone,
        identityCard: applicant.value.identityCard,
        door: applicant.value.door,
        numberPeople: applicant.value.numberPeople,
        objective: applicant.value.objective
      }
    )

    if (response.status === 200) {
      alert('申请信息已成功提交！')
      dialogVisible.value = false // 关闭对话框
      resetForm() // 提交成功后重置表单
    }
  } catch (error) {
    console.error('提交失败:', error)
    alert('提交申请信息失败，请重试！')
  }
}

// 获取申请人数据
const getApplicant = async () => {
  const res = await applicantAPI()
  // console.log(res)
  ListData.value = res.data.data
}
getApplicant()

// 加载效果
const loading = ref(false)
// 发请求前开启，发完请求后关闭
// loading.value = true   loading.value = false
// 没有数据时，显示空对象

// 定义请求参数对象
const params = ref({
  page: 1, // 当前页
  size: 13 // 当前生效的每页条数
})

// 基于params参数，获取文章列表
const getArtList = async () => {
  // 调用接口返回申请人信息列表。
  const res = artList(params.value)
  console.log(res)
}
getArtList()

// 计算当前页要显示的数据
// const paginatedData = computed(() => {
//   const start = (params.value.pagenum - 1) * params.value.pagesize
//   return ListData.value.slice(start, start + params.value.pagesize)
// })

const totalItems = ref(ListData.value.length)
// 分页处理
const onCurrentChange = (page) => {
  params.value.pagenum = page
}
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="card-header">
        <span>申请人信息</span>
      </div>
      <div class="btn">
        <el-button @click="getExcel" type="primary">导出名单</el-button>

        <el-button @click="dialogVisible = true" type="warning"
          >导入名单</el-button
        >

        <el-button @click="getNotuser()" type="danger">未通过</el-button>
        <el-button @click="getApplicant()" color="#7f24d6"
          >查看申请人</el-button
        >
      </div>
    </template>

    <!-- 弹出对话框 -->
    <el-dialog title="导入申请人信息" v-model="dialogVisible">
      <el-form :model="applicant" label-width="100px">
        <el-form-item label="姓名">
          <el-input v-model="applicant.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="applicant.phone"></el-input>
        </el-form-item>
        <el-form-item label="身份证">
          <el-input v-model="applicant.identityCard"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            v-model="applicant.date"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="门号">
          <el-input v-model="applicant.door"></el-input>
        </el-form-item>
        <el-form-item label="人数">
          <el-input-number
            v-model="applicant.numberPeople"
            :min="1"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="目的">
          <el-input v-model="applicant.objective"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="applicant.status" placeholder="请选择状态">
            <el-option label="处理中" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <!-- 确认和取消按钮 -->
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitApplicant">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <el-table
      v-loading="loading"
      :data="ListData"
      height="570"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="序号" type="index" width="100"></el-table-column>
      <el-table-column label="申请人" prop="name"></el-table-column>
      <el-table-column label="电话" prop="phone"></el-table-column>
      <el-table-column
        label="身份证号码"
        width="220"
        prop="identityCard"
      ></el-table-column>
      <el-table-column
        label="申请日期"
        width="120"
        prop="date"
      ></el-table-column>
      <el-table-column label="选择门区">
        <!-- 使用枚举映射 door 值为中文门区名 -->
        <template #default="scope">
          {{ doorEnum[scope.row.door] || '未知门' }}
        </template>
      </el-table-column>
      <el-table-column label="随行人数" prop="numberPeople"></el-table-column>
      <el-table-column label="入校目的" prop="objective"></el-table-column>

      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>
    <!-- 分页区 -->
    <template #footer>
      <el-pagination
        :current-page="params.page"
        :page-size="params.size"
        background
        layout="pager"
        :total="totalItems"
        @current-change="onCurrentChange"
      />
    </template>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  max-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  .card-header {
    margin-top: 0;

    span {
      font-size: 15px;
      font-weight: 600;
    }
  }
}
.btn {
  margin: 10px 0;
}
.el-pagination {
  display: flex; /* 使用 Flexbox */
  justify-content: flex-end; /* 将内容靠右对齐 */
}
</style>
