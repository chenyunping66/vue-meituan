import Router from "koa-router";
import Redis from 'koa-redis'
import  nodeMailer from 'nodeMailer'
import User from '../dbs/models/users'
import Passport from '../untils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'

//1.创建路由对象
let router = new Router({
  prefix:'users'
})

let  Store = new Redis().client
router.post('/signup',async(ctx)=>{
  const {
    //解构赋值获取
    username,
    password,
    email,
    code
  }=ctx.request.body;

  if(code){  //取出验证码和过期时间
    const saveCode = await Store.hget(`nodemail:${username}`,'code')
    const saveExpire = await Store.hget(`nodemail:${username}`,'expire')
    //2.验证码对比
    if(code==saveCode){
      if(new Date().getTime()-saveExpire>0){
        ctx.body={
          code:-1,
          msg:'验证码已过期，请重新尝试'
        }
        return false
      }
    }else{
      ctx.body ={
        code:-1,
        msg:'请填写正确的验证码'

      }
    }
  }else{
      ctx.body={
        code:-1,
        msg:'请填写验证码'
      }
    }
    //查询判断用户名
    let user = await User.find({
      username
    })
    if(user.length){
      ctx.body={
        code:-1,
        msg:'已被注册'
      }
      return
    }
    //没有注册就写库
    let nuser  = await User.create({
      username,
      password,
      email
    })
    if(nuser){
      let res = await axios.post('/user/signin',{
        username,
        password
      })
      if(res.data&&res.data.code===0){
        ctx.body={
          code:0,
          msg:'注册成功'
          user:res.data.user
        }
      }else{
    ctx.body={
      code:-1,
      msg:'error'
    }
      }
    }else{
      ctx.body= {
        code:-1,
        msg:'注册失败'
      }
    }
})

//登陆接口
router.post('/signin',async(ctx,next)=>{
  return Passport.authenticate('local',function (err,user,info,status) {
    if(err){
      ctx.body={
        code:-1,
        msg:err
      }
    }else{
      if(user){
        ctx.body={
          code:0,
          msg:'登陆成功',
          user
        }
        return ctx.login(user)
      }else{
        ctx.body={
          code:1,
          msg:info
        }
      }
    }
  })(ctx,next)
})


//验证码接口
router.post('/verify',async(ctx,next)=>{
  let username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`,'expire')
  if(saveExpire&&new Date().getTime()-saveExpire<0){
    ctx.body={
      code:-1,
      msg:'验证请求过于频繁，1分钟内1次'
    }
    return false
  }

  //发邮件功能
  ket transporter = nodeMailer.createTransport({
    host:Email.smtp.host,
    port:587,
    secure:false,
    auth:{
      user:Email.smtp.user,
      pass:Email.smtp.pass
    }
  })

  //
  let ko = {
    code:Email.smtp.code()
    expire:Email.smtp.expire(),  //过期日期
    email:ctx.request.body.email, //给谁发
    user:ctx.request.body.username
  }

  //邮件里面显示什么内容
  let mailOptions ={
    from:`"认证邮件"<${Email.smtp.user}>`,
    to:ko.email,
    subject:'《慕课网》注册码'
    html:`您在慕课网课程中注册，您的邀请码是${ko.code}`
  }
  await transporter.sendMial(mailOptions,(err,info)=>{
    if(error){
      return console.log('error')
    }else{
      Store.hmset(`nodemail:${ko.user}`,'code',ko.code,'expire',ko.expire,'email',ko.email)
    }
  })

  ctx.body={
    code:0,
    msg:'验证码已发送，可能会有延迟，有效期1分钟'
  }
})


//退出接口
router.get('/exit',async(ctx,next)=>{
  await ctx.logout()  //注销动作
  if(!ctx.isAuthenticated()){   //判断是否是登陆状态，二次注销
ctx.body={
  code:0
}
  }else{
    ctx.body={
      code:-1
    }
  }
})


//获取用户名接口
router.get ('/getUser',async(ctx)=>{
  if(ctx.isAuthenticated()){
    const {username,email}=ctx.session.passport.user
    ctx.body={
      user:username,
      email
    }
  }else{
    ctx.body={
      user:'',
      email:''
    }
  }
})

export default router