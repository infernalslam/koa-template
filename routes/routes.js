var router = require('koa-router')()

router.get('/', (ctx) => {
    ctx.body = { text: 'Hello world !!!' }
})

router.get('/route', (ctx) => {
    ctx.body = { text: 'route complete' }
})

module.exports = router