const Koa = require('koa');
const App = new Koa();
const fs = require('fs.promised');
const path = require('path');
const route = require('koa-route');
const server = require('koa-static');
const compose = require('koa-compose');

// webpack热更新配置
const webpack = require('webpack');
const config = require(path.resolve('./webpack.config.babel.js'));
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');

const port = 3000;
const complier = webpack(config);

// 中间件配置
const devMiddleware = webpackDevMiddleware(complier, {
    contentBase: config.output.path,
    publicPath: config.output.publicPath, // 绑定中间件的公共路径,与webpack配置的路径相同
    quiet: true, // 向控制台显示任何内容 
    hot: true
});
const hotMiddleware = webpackHotMiddleware(complier);

const main = async (ctx, next) => {
    ctx.response.type = 'html';
    ctx.response.body = await fs.readFile(path.resolve('index.html'), 'utf8');
}
const route1 = route.get('/', main)
const mainPath = server(path.resolve('./dist')) // 指定静态资源的路径

// const middleware = compose([
//     devMiddleware,
//     // hotMiddleware,
//     mainPath,
//     route1
// ])

App.use(devMiddleware);
App.use(hotMiddleware);
App.use(mainPath);
App.use(route1);

App.listen(port, err => {
    if (err) {
        console.log('哦哦，出错了 %s', error);
    }
    else {
        console.info(
            'Listen on port %s, Open up http://localhost:%s/ in your browser',
            port,
            port
        );
    }
});
