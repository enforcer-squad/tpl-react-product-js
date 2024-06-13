import { memo } from 'react';
import { Checkbox } from 'antd';
import appModel from '@/store/app';
import { useModel } from '@enforcer-squad/rex';

const TodoItem = ({ todo }) => {
  console.log('TodoItem render', todo);

  const { updateTodo, removeTodo } = useModel(appModel);

  const changeHandler = e => {
    updateTodo(todo.id, e.target.checked);
  };

  return (
    <div>
      <Checkbox onChange={changeHandler}>
        {todo.name}
        {todo.completed + ''}
      </Checkbox>
      <button onClick={() => removeTodo(todo.id)}>delete</button>
    </div>
  );
};

export default memo(TodoItem);
