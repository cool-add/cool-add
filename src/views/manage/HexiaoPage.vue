<script setup>
import { computed, ref } from 'vue'

const tableData = ref([
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '二维码核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: false
  },
  {
    peopel: '彭于晏',
    iphone: '110120119',
    number: '250821233309875748',
    datatime: '2024-7-20 9:00-12:30',
    verificationMethod: '刷脸核销',
    isVerified: true
  }
])

// 定义请求参数对象
const params = ref({
  pagenum: 1, // 当前页
  pagesize: 11 // 当前生效的每页条数
})

// 计算当前页要显示的数据
const paginatedData = computed(() => {
  const start = (params.value.pagenum - 1) * params.value.pagesize
  return tableData.value.slice(start, start + params.value.pagesize)
})

const totalItems = ref(tableData.value.length)
// 分页处理
const onCurrentChange = (page) => {
  params.value.pagenum = page
}
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="btn">
        <el-button type="primary">导出名单</el-button>

        <el-button type="warning">导入名单</el-button>

        <el-button type="danger">未通过</el-button>
        <el-button color="#7f24d6">打印</el-button>
      </div>
    </template>

    <el-table :data="paginatedData" style="width: 100%" height="600">
      <el-table-column type="selection" width="55" />
      <el-table-column label="序号" type="index" width="60" />
      <el-table-column label="申请人" prop="peopel" />
      <el-table-column label="电话" width="100" prop="iphone" />
      <el-table-column label="身份证号码" prop="number" width="200" />
      <el-table-column label="申请日期" prop="datatime" width="200" />
      <!-- 核销方式列 -->
      <el-table-column label="核销方式">
        <template #default="{ row }">
          <el-radio-group v-model="row.verificationMethod">
            <el-radio label="刷脸核销">刷脸核销</el-radio>
            <el-radio label="二维码核销">二维码核销</el-radio>
          </el-radio-group>
        </template>
      </el-table-column>

      <!-- 状态列 -->
      <el-table-column label="状态" width="100">
        <template #default="{ row }">
          <div class="status-container">
            <el-badge
              :style="{
                backgroundColor: row.isVerified ? 'blue' : 'red'
              }"
            ></el-badge>
            <span style="color: black; margin-left: 8px">
              {{ row.isVerified ? '已核销' : '未核销' }}
            </span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区 -->
    <template #footer>
      <el-pagination
        :current-page="params.pagenum"
        :page-size="params.pagesize"
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
