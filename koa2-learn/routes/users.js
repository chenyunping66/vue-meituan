const router = require('koa-router')()
const Redis = require('koa-redis')
const Person = require('../dbs/models/person')

const Store = new Redis().client

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
//curl -d 'name=chenyunping&age=21' http://localhost:3000/users/addPerson
//curl: linux（shell）命令,表示发送一个请求。-d:表示发送一个post请求  +数据项 + post接口地址  

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/fix', async function (ctx) {
  const st = await Store.hset('fix', 'name', Math.random())
  ctx.body = {
    code: 0
  }
})

router.post('/addPerson', async function (ctx) {
  const person = new Person({
    name: ctx.request.body.name,
    age: ctx.request.body.age
  }) //scalmal:增删查改
  // qurey  get
  let code
  try {
    await person.save() //model增添数据的行为
    code = 0 //没有异常
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})

router.post('/getPerson', async function (ctx) {
  const result = await Person.findOne({
    name: ctx.request.body.name
  })
  const results = await Person.find({
    name: ctx.request.body.name
  })
  ctx.body = {
    code: 0,
    result,
    results
  }
})

router.post('/removePerson', async function (ctx) {
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove()
  ctx.body = {
    code: 0
  }
})

//npm i koa-generic-session koa-redis

//nrm use npm 可以切换淘宝源
//vue init nuxt-community/koa-template nuxt-learn   nuxt和koa

module.exports = router