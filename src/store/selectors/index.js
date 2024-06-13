import appModel from '@/store/app';
import { useModel } from '@enforcer-squad/rex';
import memoize from 'fast-memoize';

const selector = memoize(
  (todos, filter) => {
    console.log('执行了');
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        throw Error('Error: un supported filter');
    }
  },
  // {
  //   serializer: ([todos, filter]) => {
  //     const calTodos = todos.map(item => {
  //       return { id: item.id, completed: item.completed };
  //     });
  //     return JSON.stringify([calTodos, filter]);
  //   },
  // },
);

export const useTodos = () => {
  const { todos, filter } = useModel(appModel);

  return selector(todos, filter);
};
