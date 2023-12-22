import { useQuery, useMutation, setData } from '@enforcer-squad/uss';
import { login, logout, checkLogin } from '@/services/api/user';

export const USER_CACHE_KEY = ['user'];

const useLogin = () => {
  return useMutation(login, {
    onSuccess: (params, data) => {
      setData(USER_CACHE_KEY, data);
    },
  });
};

const useCheckLogin = () => useQuery(USER_CACHE_KEY, checkLogin, { params: [] });

const useLogout = () => {
  return useMutation(logout, {
    onSuccess: () => {
      setData(USER_CACHE_KEY, {});
    },
  });
};

export { useLogin, useCheckLogin, useLogout };
