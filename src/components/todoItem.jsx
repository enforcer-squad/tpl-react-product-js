import { memo } from 'react';
import { Checkbox } from 'antd';
import appModel from '@/store/app';
import { useUSS } from '@enforcer-squad/uss';

const TodoItem = ({ todo }) => {
  console.log('TodoItem render', todo);

  const { updateTodo, removeTodo } = useUSS(appModel);

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
