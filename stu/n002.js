var fs = require("fs");
fs.readFile('./stu/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("非阻塞代码实例运行成功");


/* var fs = require("fs");
var data = fs.readFileSync('./stu/input.txt');
console.log(data.toString());
console.log("阻塞代码实例执行结束"); */