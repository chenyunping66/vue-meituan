function pv(ctx) {
  ctx.session.count++
  global.console.log('pvc', ctx.path)
}

module.exports = function () {
  return async function (ctx, next) {
    pv(ctx)
    await next()
  }
}

//小的中间件