<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-01 16:41:08
 * @LastEditTime: 2019-10-09 11:56:33
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <el-row>
      <el-col :span="5">
        <emenu />
      </el-col>
      <el-col :span="19">
        <life />
      </el-col>
    </el-row>
    <el-row :span="24">
      <artistic />
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu'
import Life from '@/components/index/life.vue'
import Artistic from '@/components/index/artistic.vue'
export default {
  components: {
    Emenu,
    Life,
    Artistic
  }
}
</script>

<style lang ="scss">
/* @import "@/assets/css/index/index.scss"; */
@import "../assets/css/index/index.scss";
</style>
