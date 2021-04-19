const koaRouter = require("koa-router");
const {Blog , User} = require('./model')
const router = new koaRouter();
const { v4: uuidv4 } = require('uuid');
var bodyParser = require('koa-bodyparser');
router.use(bodyParser())
 
 router.post('create','/',async (ctx)=>{
     var body = ctx?.request?.body 
     console.log(body);
     if(!body||!body.title || !body.content) {
         ctx.status = 400;
         return ctx.body = 'bad body'
     }
     const user =  await Blog.create({...body,...{id:uuidv4()}});
     ctx.body = "<h1>Hello World, Koa folks!</h1>" + JSON.stringify(user);
 }) 

 router.get('blog','/',async (ctx)=>{
    const blog = await Blog.findAll()
    ctx.body = blog
 })

 module.exports.router=router