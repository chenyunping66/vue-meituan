<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您，<span class="username">{{user}}</span>
      [<nuxt-link to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">
        立即登录
      </nuxt-link>
      <nuxt-link to="/register" class="register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      user: ''
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
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
