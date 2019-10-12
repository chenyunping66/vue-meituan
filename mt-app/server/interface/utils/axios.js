import axios from 'axios'
const instance = axios.create({
  //创建实例
  baseURL:`http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}` , //配置端口、获取环境变量
  timeout:1000,
  headers:{

  }
})

export default instance   //导出