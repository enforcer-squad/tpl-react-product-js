import { memo, useState } from 'react';
import { Input, Button } from 'antd';
import appModel from '@/store/app';
import { useUSS } from '@enforcer-squad/uss';

const AddTodo = () => {
  console.log('AddTodo render');
  const [value, setValue] = useState('');

  const { addTodo } = useUSS(appModel);

  const changeHandler = e => {
    setValue(e.target.value);
  };

  const clickHandler = () => {
    addTodo({ name: value, completed: false });
    setValue('');
  };

  return (
    <div>
      <Input style={{ width: '200px' }} placeholder="todo context" value={value} onChange={changeHandler} />
      <Button type="primary" onClick={clickHandler}>
        Add Todo
      </Button>
    </div>
  );
};

export default memo(AddTodo);
