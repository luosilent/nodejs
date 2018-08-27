const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    if (ctx.request.path != '/') {
        ctx.response.type = 'html';
        ctx.response.body = '<a href = "/"> Index Page</a>';
    }else{
        ctx.response.type = 'html'
        ctx.response.body = fs.createReadStream('./koa/tem/template.html')
    }
};

app.use(main);
app.listen(3000);