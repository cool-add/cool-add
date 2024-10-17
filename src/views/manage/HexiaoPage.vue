<script setup>
// import { getFaceAPI, getHistoryAPI } from '@/api/hexiao'
import { ref } from 'vue'
// import { useRoute } from 'vue-router'
import { artList, getNotAPI } from '@/api/usermanage'
// import ChannelEdit from './components/ChannelEdit.vue'
import axios from 'axios'
import { getHexiaoAPI } from '@/api/hexiao'

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

// 核销方式的映射关系
const HexiaoEnum = {
  face: '人脸核销',
  qr_code: '二维码核销'
}

// 查询未通过的人员名单
const getNotuser = async () => {
  const res = await getNotAPI()
  ListData.value = res.data.data
}

const getExcel = () => {
  // 跳转到指定网址
  window.location.href = 'http://120.77.178.195:8088/applicant/export'
}

// 获取核销人数据
const getApplicant = async () => {
  const res = await getHexiaoAPI()

  ListData.value = res.data.data
}
getApplicant()

// 导入申请人信息
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

//#region
// const tableData = ref([
// {
//   peopel: '彭于晏',
//   iphone: '110120119',
//   number: '250821233309875748',
//   datatime: '2024-7-20 9:00-12:30',
//   verificationMethod: '刷脸核销',
//   isVerified: true
// }
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '二维码核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: false
//   },
//   {
//     peopel: '彭于晏',
//     iphone: '110120119',
//     number: '250821233309875748',
//     datatime: '2024-7-20 9:00-12:30',
//     verificationMethod: '刷脸核销',
//     isVerified: true
//   }
// ])

//#endregion
// 定义请求参数对象
const params = ref({
  page: 1, // 当前页
  size: 11 // 当前生效的每页条数
})

// 基于params参数，获取文章列表
const getArtList = async () => {
  // 调用接口返回申请人信息列表。
  const res = artList(params.value)
  console.log(res)
}

// 计算当前页要显示的数据
// const paginatedData = computed(() => {
//   const start = (params.value.pagenum - 1) * params.value.pagesize
//   return ListData.value.slice(start, start + params.value.pagesize)
// })

const total = ref(0)
// 分页处理
const onCurrentChange = (page) => {
  params.value.page = page
  getArtList()
}
</script>
<template>
  <el-card class="page-container">
    <template #header>
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

    <el-table :data="ListData" style="width: 100%" height="600">
      <el-table-column type="selection" width="55" />
      <el-table-column label="序号" type="index" width="60" />
      <el-table-column label="申请人" prop="user" />
      <el-table-column label="电话" width="100" prop="phone" />
      <el-table-column label="身份证号码" prop="identity" width="200" />
      <el-table-column label="申请日期" prop="verificationTime" width="200" />
      <!-- 核销方式列 -->
      <el-table-column label="核销方式">
        <template #default="scope">
          {{ HexiaoEnum[scope.row.verificationType] }}
        </template>
      </el-table-column>

      <!-- 状态列 -->
      <el-table-column label="状态" width="100">
        <template #default="{ row }">
          <div class="status-container">
            <el-badge
              :style="{
                backgroundColor: row.verified ? 'blue' : 'red'
              }"
            ></el-badge>
            <span style="color: black; margin-left: 8px">
              {{ row.verified ? '已核销' : '未核销' }}
            </span>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页区 -->
    <template #footer>
      <el-pagination
        :current-page="params.page"
        :page-size="params.size"
        background
        layout="pager"
        :total="total"
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
}
.el-pagination {
  margin-top: 5px;
  justify-content: flex-end;
}
.status-container {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}
.el-badge {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>
