<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-01 16:41:08
 * @LastEditTime: 2019-10-09 11:38:57
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <el-container class="layout-default">
      <el-header>
        <my-header />
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
      <el-footer style="height:100%">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/public/header/index'
import MyFooter from '@/components/public/footer/index'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
<style>
</style>
