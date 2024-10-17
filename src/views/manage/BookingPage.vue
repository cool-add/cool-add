<script setup>
import { ref } from 'vue'
import { getCarAPI } from '@/api/booking'
import { applicantAPI } from '@/api/usermanage'

const activeSegment = ref('personal') // 默认选择个人/单位预约

// 获取后端返回的数据
const person = ref([])
// 门的映射关系
const doorEnum = {
  1: '东门',
  2: '西门',
  3: '南门',
  4: '北门'
}

//#region 头部切换栏

// 同意和不同意的处理函数
const agree = () => {
  console.log('用户同意')
}

const disagree = () => {
  console.log('用户不同意')
}

// 设置当前活动的段落
const setActiveSegment = (segment) => {
  activeSegment.value = segment
}
//#endregion

// 定义请求参数对象
const params = ref({
  pagenum: 1, // 当前页
  pagesize: 9 //当前生效的每页条数
})

//#region 个人/单位页面

// 计算当前页要显示的数据

const totalItems = ref(person.value.length)
// 分页处理
const onCurrentChange = (page) => {
  params.value.pagenum = page
}
//#endregion

//#region 车辆页面

// 获取预约人信息
const bookingList = ref([])

const bookingAPI = async () => {
  const res = await getCarAPI()

  bookingList.value = res.data.data
  console.log(bookingList.value)
}
bookingAPI()

// 导入申请人信息
const getApplicant = async () => {
  const res = await applicantAPI()

  person.value = res.data.data
}
getApplicant()

// 计算当前页要显示的数据

// 分页处理
const oncurrentchange = (page) => {
  params.value.pagenum = page
}
//#endregion

//#region

const currentStep = ref(2)
//#endregion

const approvalDate = ref('2024-7-21')
</script>

<template>
  <div>
    <div class="box">
      <div class="leftbox">
        <el-button-group>
          <el-button
            :type="activeSegment === 'personal' ? 'primary' : 'default'"
            @click="setActiveSegment('personal')"
          >
            个人/单位预约
          </el-button>

          <el-button
            :type="activeSegment === 'vehicle' ? 'primary' : 'default'"
            @click="setActiveSegment('vehicle')"
          >
            车辆预约
          </el-button>
        </el-button-group>
      </div>

      <div class="rightbox">
        <el-button-group>
          <el-button type="primary" @click="agree"> 同意 </el-button>
          <el-button type="danger" @click="disagree"> 不同意 </el-button>
        </el-button-group>
      </div>
    </div>
  </div>

  <div v-if="activeSegment === 'personal'">
    <div class="bigbox">
      <el-card>
        <div
          v-for="booking in bookingList"
          :key="booking.id"
          class="card-header"
        >
          <div class="header-left">
            <span>序号：{{ booking.carId }}</span>
          </div>
          <div class="header-right">
            <span>状态：</span>
            <el-tag type="warning">待审批</el-tag>
          </div>
        </div>

        <div
          v-for="booking in bookingList"
          :key="booking.id"
          class="applicant-info"
        >
          <div class="info-row">
            <div class="info-column">申请人:{{ booking.name }}</div>
            <div class="info-column">申请单位:青青草原</div>
            <div class="info-column">申请人电话:1314520</div>
            <div class="info-column">申请日期:2024-5-20 9:00-12:00</div>
          </div>
          <div class="info-row">
            <div class="info-column">申请人身份证号码:5201314</div>
            <div class="info-column">选择门区:北门</div>
            <div class="info-column">随行人数:2</div>
            <div class="info-column">入校目的:超市送货</div>
          </div>
        </div>

        <div class="steps-container">
          <div class="progress-text">访客进度</div>
          <div class="steps-bar">
            <el-steps :active="currentStep" align-center class="custom-steps">
              <el-step title="访客提交申请" description="2024-7-20"></el-step>
              <el-step title="管理员审批">
                <template v-slot:description>
                  <div class="approval-info">
                    <div class="approval-status">待审批</div>
                    <div>{{ approvalDate }}</div>
                  </div>
                </template>
              </el-step>
              <el-step title="访客入校"></el-step>
              <el-step title="访客出校"></el-step>
            </el-steps>
          </div>
        </div>
      </el-card>
    </div>

    <div>
      <el-card>
        <div class="card-header">
          <span>申请人信息</span>
        </div>

        <el-table
          v-loading="loading"
          :data="person"
          height="570"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column
            label="序号"
            type="index"
            width="100"
          ></el-table-column>
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
          <el-table-column
            label="随行人数"
            prop="numberPeople"
          ></el-table-column>
          <el-table-column label="入校目的" prop="objective"></el-table-column>

          <template #empty>
            <el-empty description="没有数据"></el-empty>
          </template>
        </el-table>

        <!-- 分页区 -->
        <template #footer>
          <div class="footer">
            <el-pagination
              :current-page="params.pagenum"
              :page-size="params.pagesize"
              background
              layout="pager"
              :total="totalItems"
              @current-change="onCurrentChange"
            />
          </div>
        </template>
      </el-card>
    </div>
  </div>

  <div v-else>
    <div class="bigbox">
      <el-card>
        <div class="card-header">
          <div
            v-for="booking in bookingList"
            :key="booking.id"
            class="header-left"
          >
            <span>序号：{{ booking.carId }}</span>
          </div>
          <div class="header-right">
            <span>状态：</span>
            <el-tag type="warning">待审批</el-tag>
          </div>
        </div>

        <div
          v-for="booking in bookingList"
          :key="booking.id"
          class="applicant-info"
        >
          <div class="info-row">
            <div class="info-column">申请人:{{ booking.name }}</div>
            <div class="info-column">车牌号:桂A666666</div>
            <div class="info-column">申请人电话:{{ booking.phone }}</div>
            <div class="info-column">申请日期:{{ booking.date }}</div>
          </div>
          <div class="info-row">
            <div class="info-column">申请人身份证号码:5201314</div>
            <div class="info-column">选择门区:{{ doorEnum[booking.door] }}</div>
            <div class="info-column">随行人数:{{ booking.numberPeople }}</div>
            <div class="info-column">入校目的:{{ booking.objective }}</div>
          </div>
        </div>

        <div class="steps-container">
          <div class="progress-text">访客进度</div>
          <div class="steps-bar">
            <el-steps :active="currentStep" align-center class="custom-steps">
              <el-step title="访客提交申请" description="2024-7-20"></el-step>
              <el-step title="管理员审批">
                <template v-slot:description>
                  <div class="approval-info">
                    <div class="approval-status">待审批</div>
                    <div>{{ approvalDate }}</div>
                  </div>
                </template>
              </el-step>
              <el-step title="访客入校"></el-step>
              <el-step title="访客出校"></el-step>
            </el-steps>
          </div>
        </div>
      </el-card>
    </div>

    <div>
      <el-card>
        <div class="card-header">
          <span>申请人信息</span>
        </div>
        <el-table
          v-loading="loading"
          :data="person"
          height="570"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column
            label="序号"
            type="index"
            width="100"
          ></el-table-column>
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
          <el-table-column
            label="随行人数"
            prop="numberPeople"
          ></el-table-column>
          <el-table-column label="入校目的" prop="objective"></el-table-column>

          <template #empty>
            <el-empty description="没有数据"></el-empty>
          </template>
        </el-table>

        <!-- 分页区 -->
        <template #footer>
          <div class="footer">
            <el-pagination
              :current-page="params.pagenum"
              :page-size="params.pagesize"
              background
              layout="pager"
              :total="totalItems"
              @current-change="oncurrentchange"
            />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .rightbox .el-button {
    border-radius: 10px;
    margin: 0 10px;
  }
  .leftbox .el-button {
    border-radius: 5px;
  }
}
.bigbox {
  max-width: 2000px;
  margin: 15px 0;
}
.card-header {
  font-size: 14px;
  font-weight: 600;
}
.footer {
  height: 20px;
  display: flex;
  justify-content: flex-end; /* 将内容靠右对齐 */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 垂直居中对齐 */
  padding: 10px;
}
.header-left,
.header-right {
  flex: 1;
}
.header-right {
  text-align: right; /* 使状态信息右对齐 */
}

.status-message {
  margin-top: 10px;
}
.applicant-info {
  margin-top: 10px;
  font-size: 11px;
  font-weight: 600;
}
.info-row {
  display: flex;
  justify-content: space-between;
}
.info-column {
  flex: 1;
  text-align: center;
  padding: 10px; /* 所有方向的内间距 */
  margin-bottom: 10px;
  text-align: left; /* 左对齐 */
}
.steps-container {
  margin-top: 40px;
  align-items: center;
}

.steps-bar {
  flex-grow: 1; /* 让步骤条占据剩余空间 */
}
.approval-info {
  display: flex;
  flex-direction: column; /* 使内容垂直排列 */
  align-items: center; /* 水平居中 */
  margin-top: 10px; /* 提供一些间距 */
  font-size: 14px; /* 调整字体大小 */
  color: #a8a8a8; /* 设置颜色 */
}
.approval-status {
  color: #f1a54b;
}

.progress-text {
  margin-top: 10px;
  margin-right: 10px; /* 右间距，使文本与步骤条有间隔 */
  font-size: 13px; /* 字体大小 */
  color: #333; /* 字体颜色 */
  font-weight: 600;
}
</style>
