'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // OAuth controller
  app.get('/users', controller.users.list);
  app.post('/users', controller.users.add);
  app.all('/users/token', app.oAuth2Server.token(), 'users.token');   // 获取token
  app.get('/users/authorize', app.oAuth2Server.authorize(), 'users.code');      // 获取授权码
  app.get('/users/authenticate', app.oAuth2Server.authenticate(), 'users.authenticate');    // 验证请求
  
};
