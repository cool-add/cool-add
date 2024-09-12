<script setup>
import avatar from '@/assets/个人.png'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// 根据当前路由的 meta 信息动态获取标题
const pageTitle = computed(() => {
  return route.meta.title || '首页'
})
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <div class="el-aside__logo">
        <p class="text">广西警察学院</p>
      </div>
      <el-menu
        active-text-color="#fff"
        background-color="#101c44"
        :default-active="$route.path"
        text-color="#fff"
        router
      >
        <el-menu-item index="/manage/page">
          <img src="@/assets/首页.png" alt="" class="image" />
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/manage/booking">
          <img src="@/assets/预约.png" alt="" class="image" />
          <span>预约管理</span>
        </el-menu-item>
        <el-menu-item index="/manage/user">
          <img src="@/assets/用户.png" alt="" class="image" />
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/manage/gonggao">
          <img src="@/assets/公告.png" alt="" class="image" />
          <span>公告管理</span>
        </el-menu-item>
        <el-menu-item index="/manage/hexiao">
          <img src="@/assets/核销.png" alt="" class="image" />
          <span>核销管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="header-container">
          <div class="left-content">{{ pageTitle }}</div>
          <div class="right-content">
            <div class="search-container">
              <el-input style="padding-left: 40px">
                <template #append>
                  <el-icon style="cursor: pointer">
                    <Search />
                  </el-icon>
                </template>
              </el-input>
            </div>
            <el-icon><Bell /></el-icon>

            <span class="el-dropdown__box">
              <el-avatar :src="avatar" />
            </span>
            <span>用户名</span>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  .el-aside {
    background-color: #101c44;
    color: #ffffff;
    font-size: 18px;

    &__logo {
      height: 50px;
      background: url('@/assets/个人.png') no-repeat left / 40px auto;
      margin: 20px;
      display: flex;
      align-items: center;
    }
    .text {
      display: flex;
      align-items: center;
      margin-left: 50px;
    }

    .el-menu {
      border-right: none;
      &.selected {
        background-color: #2273ed;
      }
    }

    // 设置选中后的背景颜色
    .el-menu-item.is-active {
      background-color: #2273ed !important; // 自定义选中项的背景颜色
      color: #fff; // 可以根据需要自定义字体颜色
    }

    .image {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
    // .el-menu &:hover {
    //   background-color: #2273ed;
    // }
  }
  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .el-dropdown__box {
      display: flex;
      align-items: center;
      right: 50px;
      .el-icon {
        color: #999;
        margin-left: 10px;
      }
      .user {
        display: flex;
        right: 10px;
      }
      &:active,
      &:focus {
        outline: none;
      }
    }
  }
  .el-header .header-container {
    display: flex;
    justify-content: space-between; /* 左右两侧分开对齐 */
    align-items: center; /* 垂直居中 */
    padding: 0 10px; /* 添加左右内边距 */
  }

  .el-header .right-content {
    display: flex; /* 使右侧内容在一行显示 */
    gap: 20px; /* 按钮之间的间距 */
    align-items: center; /* 垂直居中 */
    margin-left: 480px;
  }

  .search-container {
    display: flex;
    justify-content: center; /* 居中 */
    width: 400px;
  }
  .el-input {
    position: relative; /* 使得绝对定位生效 */
  }
  .el-icon {
    margin-right: 5px; /* 图标与文本之间的间距 */
  }
}
</style>
