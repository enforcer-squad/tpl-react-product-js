import { memo } from 'react';
import { Radio } from 'antd';
import appModel, { filters } from '@/store/app';
import { useUSS } from '@enforcer-squad/uss';

const FilterRow = () => {
  console.log('FilterRow render');
  const { filter, toggleFilter } = useUSS(appModel);

  const changeHandler = e => {
    const ret = e.target.value;
    toggleFilter(ret);
  };

  return (
    <div>
      <Radio.Group onChange={changeHandler} value={filter}>
        {filters.map(filter => (
          <Radio key={filter} value={filter}>
            {filter}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default memo(FilterRow);
