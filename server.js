const Koa = require('koa')
const app = new Koa()
var router = require('./routes/routes.js')

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
console.log('htpp://localhost:3000')