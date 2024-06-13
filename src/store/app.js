import { createModel, devtools } from '@enforcer-squad/rex';

let defaultId = 1;

const model = createModel({
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
devtools(model, { name: 'app' });

export const filters = ['all', 'completed'];

export default model;
