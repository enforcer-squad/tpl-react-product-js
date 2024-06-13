import { useModel } from '@enforcer-squad/rex';
import { intl } from '@/utils/index';
import userModel from '@/store/user';

const test = {
  name: 'txdoctor1',
  password: 'a6b2df636ed296abfd1d3f9128d2a04ddc3a9621501920518a60493505e96c7d',
};

const Index = () => {
  const { doLogin } = useModel(userModel);
  return <button onClick={() => doLogin(test)}>{intl('登录')}</button>;
};

export default Index;
