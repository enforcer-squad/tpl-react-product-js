import client from '@/utils/client';

const login = params =>
  client({
    url: `/v1/user/login`,
    method: 'post',
    data: params,
  });

const checkLogin = () =>
  client({
    url: `/v1/user/checkLogin`,
    method: 'get',
  });

const logout = () =>
  client({
    url: `/v1/user/logout`,
    method: 'get',
  });

export { login, checkLogin, logout };
