import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useCheckLogin } from '@/services/userService';
import routes from './config';

const Routes = ({ auth = {} }) => {
  const routing = useRoutes(routes(auth));
  return routing;
};

const Router = () => {
  const { data } = useCheckLogin();

  return (
    <BrowserRouter>
      <Routes auth={data?.data} />
    </BrowserRouter>
  );
};
export default Router;
