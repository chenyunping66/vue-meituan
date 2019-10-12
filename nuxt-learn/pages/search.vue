<template>
  <div class="page">
    page is Seacher
    <ul>
      <li v-for="(item,index) in $store.state.navbar.app" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'search',
  data () {
    return {
      list: []
    }
  },
  // async fetch () {   //在render之前可以请求异步数据  asyncData:用于组件之间。fetch：用于axios
  //   let { status, data: { list } } = await axios.get('http://localhost:3000/city/list')
  //   if (status === 2000) {
  //     return {
  //       list
  //     }
  //   }
  // }
  async mounted () {   //这个生命周期只在浏览器端产生效果，在服务器端不渲染
    let self = this;
    let { status, data: { list } } = await axios.get('/city/list')
    if (status === 200) {
      self.list = list
    }
  }
}
</script>
<style scoped>
</style>
