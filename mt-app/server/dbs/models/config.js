export default{
  dbs:'mongodb://127.0.0.1:27017/student',
  redis:{
    get host(){
      return '127.0.0.1'
    },
    get port(){
      return 6379   //m默认端口号
    }
  },
  smtp:{   //主机服务
    get host(){
      //腾讯主机
      return 'smtp.qq.com'
    },
    get user(){
      return '1276830496@qq.com'
    },
    get pass(){
      return 'yvssjjkkwmsjs'
    }
  },
  get code(){
    return()=>{
      return Math.random().toString(16).slice(2,6).toUpperCase()
    }
  },
  get expire(){
    return ()=>{
      return new Date().getTime()+60*60*1000
    }
  }
}