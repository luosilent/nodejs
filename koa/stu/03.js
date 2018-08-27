const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    if (ctx.path != '/') {
        ctx.type = 'html';
        ctx.body = '<a href = "/"> Index Page</a>';
    }else{
        ctx.type = 'html'
        ctx.body = fs.createReadStream('./koa/tem/template.html')
    }
});

app.listen(3000);