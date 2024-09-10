<script setup>
import { computed, ref } from 'vue'
// import ChannelEdit from './components/ChannelEdit.vue'

const channelList = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    iphone: '110119120',
    usernum: '450822222222222222',
    number: '2',
    todo: '拿行李',
    address: '北门'
  }
])

// 加载效果
const loading = ref(false)
// 发请求前开启，发完请求后关闭
// loading.value = true   loading.value = false
// 没有数据时，显示空对象

// 定义请求参数对象
const params = ref({
  pagenum: 1, // 当前页
  pagesize: 8, // 当前生效的每页条数
  cate_id: '',
  state: ''
})

// 计算当前页要显示的数据
const paginatedData = computed(() => {
  const start = (params.value.pagenum - 1) * params.value.pagesize
  return channelList.value.slice(start, start + params.value.pagesize)
})

const totalItems = ref(channelList.value.length)
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
        <el-button type="primary">导出名单</el-button>

        <el-button type="warning">导入名单</el-button>

        <el-button type="danger">未通过</el-button>
        <el-button color="#7f24d6">打印</el-button>
      </div>
    </template>
    <el-table
      v-loading="loading"
      :data="paginatedData"
      height="350"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="序号" type="index" width="100"></el-table-column>
      <el-table-column label="申请人" prop="name"></el-table-column>
      <el-table-column label="电话" prop="iphone"></el-table-column>
      <el-table-column
        label="身份证号码"
        width="220"
        prop="usernum"
      ></el-table-column>
      <el-table-column
        label="申请日期"
        width="120"
        prop="date"
      ></el-table-column>
      <el-table-column label="选择门区" prop="address"></el-table-column>
      <el-table-column label="随行人数" prop="number"></el-table-column>
      <el-table-column label="入校目的" prop="todo"></el-table-column>

      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
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
  max-width: 2000px;
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
