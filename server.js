
let express = require("express");
let path = require("path");
let app = express();
let port = 8080;
// 首页模拟数据

// 静态文件中间件 参数是静态文件的根路径
app.use(express.static(path.resolve("build")));
// 允许跨域中间件


app.listen(port,()=>{
    console.log(`运行成功, 监听8080端口`);
});