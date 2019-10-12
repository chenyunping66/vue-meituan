<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 14:50:20
 * @LastEditTime: 2019-10-09 16:16:51
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a href="/" class="site-logo"></a>
        <span class="login">
          <em class="bold">已有美团账号？</em>
          <a href="/login">
            <el-button type="primary" size="small">登陆</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="昵称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
       <el-input v-model="ruleForm.email"></el-input>
      <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
      <span classs="status">{{statusMsg}}</span>
  </el-form-item>
  <el-form-item label="验证码" prop="code">
    <el-input v-model="ruleForm.code" maxlength="4"></el-input>
  </el-form-item>
  
  <el-form-item label="密码" prop="pwd">
    <el-input v-model="ruleForm.pwd" type="password"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="cpwd">
    <el-input v-model="ruleForm.cpwd" type="password"></el-input>
  </el-form-item>
  
   <el-form-item label="" prop="cpwd">
    <el-button  type="primary" @click="register">同意以下协议并注册</el-button>
    <div class="error">{{error}}</div>
  </el-form-item>
  <el-from-item>
    <a class="f1" href="#" target="_blank">《美团网用户协议》</a>
  </el-from-item>

  </el-form-item>
</el-form>
    </section>
  </div>
</template>

<script>

export default {
  layout: 'blank',
  components: {},
  data () {
    return{
statusMsg:'',
   error:'',
   ruleForm:{
     name:'',
     code:'',
     pwd:'',
     cpwd:'',
     email:''
   },
   rules:{
     name:[{
       required: true,type:'string',message:'请输入昵称',tigger:'blur'
     }],
     email:[{
       required:true,type:'email',message:'请输入邮箱',tigger:'blur'
     }],
     pwd:[{
       required:true,message:'创建密码',tigger:'blur'
     }],
     cpwd:[{
       required:true,message:'确认密码',tigger:'blur'
     },{
       validator:(rule,value,callback)=>{
         if(value===''){
 callback(new Error('请再次输入密码'))
         }else if(value!==this.ruleForm.pwd){
           callback('两次输入不一致')
         }else{
           callback()
         }
       },
       target:'blur'
     }]
   }
    }
  },
  computed: {},
  watch: {},
  methods: {
   sendMsg:function(){

   },
    register:function (params) {
      
    }
  },
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
@import "@/assets/css/register/index.scss";

// @import "@assets/css/register/index.scss";
</style>
