<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          同意
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
