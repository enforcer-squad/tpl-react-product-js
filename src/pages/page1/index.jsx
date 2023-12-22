import { useState } from 'react';
import FilterRow from '@/components/filterRow';
import AddTodo from '@/components/addTodo';
import TodoList from '@/components/todoList';
import { useLogout } from '@/services/userService';
import { intl } from '@/utils/index';
import style from './index.less';

const Index = () => {
  const [count, setCount] = useState(0);
  const { mutate } = useLogout();
  return (
    <div className={style.test}>
      <FilterRow />
      <AddTodo />
      <TodoList />
      <div>
        {count}
        <button onClick={() => setCount(c => c + 1)}>{intl('增加')}</button>
      </div>
      <div>
        <button onClick={() => mutate(1)}>{intl('退出')}</button>
      </div>
    </div>
  );
};

export default Index;
