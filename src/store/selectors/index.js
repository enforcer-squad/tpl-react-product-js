import { useMemo } from 'react';
import appModel from '@/store/app';
import { useUSS } from '@enforcer-squad/uss';

export const useTodos = () => {
  const { todos, filter } = useUSS(appModel);

  const ret = useMemo(() => {
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        throw Error('Error: un supported filter');
    }
  }, [todos, filter]);

  return ret;
};
