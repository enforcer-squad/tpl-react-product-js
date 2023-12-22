import { uss, devtools } from '@enforcer-squad/uss';

let defaultId = 1;

const model = uss({
  key: 'app',
  todos: [],
  filter: 'all',
  addTodo(todo) {
    model.todos.push({
      ...todo,
      id: defaultId++,
    });
  },
  removeTodo(id) {
    model.todos = model.todos.filter(todo => todo.id !== id);
  },
  updateTodo(id, value) {
    const ret = model.todos.find(todo => todo.id === id);
    if (ret) {
      ret.completed = value;
    }
  },
  toggleFilter(filter) {
    model.filter = filter;
  },
});
devtools(model);

export const filters = ['all', 'completed'];

export default model;
