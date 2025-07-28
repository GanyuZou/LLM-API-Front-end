// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 8000; // 使用8000端口，避免与Python API的8998冲突

// 托管当前目录下的静态文件（包括test.html）
app.use(express.static(path.join(__dirname)));

// 根路由：可选，直接访问时重定向到test.html
app.get('/', (req, res) => {
  res.redirect('/test_v2.html');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Node.js静态服务器运行在 http://localhost:${port}`);
  console.log(`访问 http://localhost:${port}/test.html 以使用聊天界面`);
  console.log(`确保Python API已在 http://localhost:8998 运行`);
});