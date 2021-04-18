const koa = require("koa");
const path = require("path");
const render = require("koa-ejs");
const koaRouter = require("koa-router");
const axios = require("axios");
var bodyParser = require('koa-bodyparser');
const app = new koa();
const {router} =  require('./router')

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)
