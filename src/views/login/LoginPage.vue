<script setup>
//登录接口import { userLoginService } from '@/api/user.js'
import { userLoginService } from '@/api/user'
import { useUserStore } from '@/stores'
import { User, Lock, Iphone } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
//获取用户数据import { useUserStore } from '@/stores'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const form = ref()
const isRegister = ref(false)
// 用于提交form的数据对象
const formModel = ref({
  username: '',
  password: '',
  Code: ''
})
// 表单校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 10, message: '用户名必须是 5-10位 的字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{5,15}$/,
      message: '密码必须是 5-15位 的非空字符',
      trigger: 'blur'
    }
  ],
  Code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      pattern: /^\S{4,6}$/,
      message: '验证码必须是 4-6位 的非空字符',
      trigger: 'blur'
    }
  ]
}
// const Code = async () => {
//   await form.value.validate()
//   await userCodeService(formModel.value)
//   ElMessage.success('登陆成功')
// }
const userStore = useUserStore()
const router = useRouter()
const login = async () => {
  await form.value.validate()
  const res = await userLoginService(formModel.value)
  // 将用户信息存入仓库，存入本地
  userStore.setToken(res.data.token)
  ElMessage.success('登录成功')
  // 路由跳转
  router.push('/')
}

watch(isRegister, () => {
  formModel.value = {
    username: '',
    password: '',
    Code: ''
  }
})
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="9" :offset="2" class="form">
      <!-- 短信登陆 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-if="isRegister"
      >
        <el-form-item>
          <h1 class="head">出入预约管理系统</h1>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-link
              type="default"
              :underline="false"
              @click="isRegister = flaes"
            >
              <h2>密码登陆</h2>
            </el-link>
            <el-link type="primary" :underline="false">
              <h2>短信登陆</h2>
            </el-link>
          </div>
        </el-form-item>
        <el-form-item prop="username" class="item">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入手机号或账号"
        /></el-form-item>

        <el-form-item prop="Code">
          <el-input
            v-model="formModel.Code"
            :prefix-icon="Iphone"
            placeholder="请输入验证码"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            @click="login"
            class="button"
            type="primary"
            auto-insert-space
            >登录</el-button
          >
        </el-form-item>
      </el-form>

      <!-- 密码登录 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-else
      >
        <el-form-item>
          <h1 class="head">出入预约管理系统</h1>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-link type="default'" :underline="false">
              <h2>密码登陆</h2>
            </el-link>
            <el-link
              type="primary'"
              :underline="false"
              @click="isRegister = true"
            >
              <h2 class="">短信登陆</h2>
            </el-link>
          </div>
        </el-form-item>
        <el-form-item prop="username" class="item">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入手机号或账号"
            clearable
        /></el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            name="password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="login()"
            class="button"
            type="primary"
            auto-insert-space
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  .bg {
    background: url('@/assets/办公文档.png') no-repeat 55% center / 720px auto;
  }
  .form {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 70vh;
    border-style: solid;
    border-radius: 2%;
    border: 1px solid transparent;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    padding-top: 1em;
    margin-top: 8em;
    .item {
      display: block;
      width: 25em;
    }
    .head {
      padding-left: 3em;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
