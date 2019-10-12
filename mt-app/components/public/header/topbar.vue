<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-01 22:47:43
 * @LastEditTime: 2019-10-01 22:48:22
 * @LastEditors: Please set LastEditors
 -->
<template>
  <el-row :gutter="10">
    <el-col :span="5">
      <geo />
    </el-col>
    <el-col :span="5">
      <user />
    </el-col>
    <el-col :span="14">
      <navbar />
    </el-col>
  </el-row>
</template>

<script>
import Geo from './geo'
import User from './user'
import Navbar from './nav'
export default {
  components: { Geo, User, Navbar },
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {},
  created () { },
  mounted () { },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  activated () { },
}
</script>
<style lang='scss' >
//@import url(); 引入公共css类
@import "@/assets/css/public/layout.scss";
// @import "@/assets/css/public/header/index.scss";
</style>
