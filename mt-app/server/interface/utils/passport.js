import passport from "koa-passport";
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'   //查用户表

passport.use(new LocalStrategy(function (async username,password,done) {
  let  where = {
    username
  };
  let result = await UserModel.findOne(where)  //操作mongodb的方法
  if(result!=null){
    if(result.passport==passport){
      result done(null,result)
    }else{
      return done(null,fals,'密码错误')
    }
  }else{
    return done(null,falss=e,'用户不存在')
  }
}))

passport.serializeUser(function(user,done){
 done(null,user)    //序列化
})

passport.deserialzeUser(function(user,done){
  return done(null,user)     //反序列化
})

export default passport