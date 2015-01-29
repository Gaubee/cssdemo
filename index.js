/*
 * 应用启动
 */
var express = require("express");
var app = express();

/*
 * 配置
 */
var port = (process.env.VMC_APP_PORT || 1104);
var host = (process.env.VCAP_APP_HOST || 'localhost');



app.all("/*", express.static(__dirname + "/"))

app.listen(port, host);
console.log("HTTP服务开启在" + port + "端口上。");