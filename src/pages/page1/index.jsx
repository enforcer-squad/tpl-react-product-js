import { useState } from 'react';
import FilterRow from '@/components/filterRow';
import AddTodo from '@/components/addTodo';
import TodoList from '@/components/todoList';
import { useModel } from '@enforcer-squad/rex';
import userModel from '@/store/user';
import { intl } from '@/utils/index';
import style from './index.less';

const Index = () => {
  const [count, setCount] = useState(0);
  const { doLogout } = useModel(userModel);
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
        <button onClick={() => doLogout()}>{intl('退出')}</button>
      </div>
    </div>
  );
};

export default Index;
