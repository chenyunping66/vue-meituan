<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 14:32:32
 * @LastEditTime: 2019-10-08 14:32:32
 * @LastEditors: your name
 -->
<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <top-bar></top-bar>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search-bar></search-bar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topBar from './topbar'
import searchBar from './searchbar'
export default {
  components: { topBar, searchBar },
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
<style lang ="scss" >
@import "@/assets/css/public/header/index.scss";
/* //@import url(); 引入公共css类 */
</style>
