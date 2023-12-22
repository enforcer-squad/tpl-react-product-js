const { resolve, dirname } = require('path');
const fs = require('fs');
const { promisify } = require('util');
const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');
const { createProxyMiddleware } = require('koa-http-proxy-server');
const chalk = require('chalk');
const { config } = require('./config');

const readFile = promisify(fs.readFile);

const createProxies = (app, proxy) => {
  if (typeof proxy !== 'object') {
    return;
  }
  Object.entries(proxy).forEach(([k, v]) => {
    app.use(createProxyMiddleware(k, v));
  });
};

const startServer = options => {
  const randomPort = Math.round(Math.random() * 10000 + 10000);
  const {
    configDir = './',
    devServer: { proxy = {} },
    preview: { port = randomPort } = {},
    path: { distPath = './dist' } = {},
  } = options;

  const app = new Koa();

  createProxies(app, proxy);
  console.log(resolve(configDir, distPath));
  app.use(mount('/', serve(resolve(configDir, distPath))));

  app.use(async ctx => {
    const indexHtml = await readFile(`${resolve(configDir, distPath)}/index.html`);
    ctx.set('Content-Type', 'text/html; charset=utf-8');
    ctx.body = indexHtml.toString();
  });

  app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(chalk.green(`preview server started on ${url}`));
  });
};

startServer(config);
