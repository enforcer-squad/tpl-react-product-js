import { createModel, devtools } from '@enforcer-squad/rex';
import { checkLogin, login, logout } from '@/services/user';

const model = createModel({
  name: '',
  role: 0,
  status: 0,
  userId: 0,
  isFirstLogin: 0,
  async check() {
    const res = await checkLogin();
    model.name = res.name;
    model.role = res.role;
    model.status = res.status;
    model.userId = res.userId;
    model.isFirstLogin = res.isFirstLogin;
  },
  async doLogin(data) {
    const res = await login(data);
    model.name = res.name;
    model.role = res.role;
    model.status = res.status;
    model.userId = res.userId;
    model.isFirstLogin = res.isFirstLogin;
  },
  async doLogout() {
    await logout();
    model.name = '';
    model.role = 0;
    model.status = 0;
    model.userId = 0;
    model.isFirstLogin = 0;
  },
});

devtools(model, { name: 'user' });

export default model;
