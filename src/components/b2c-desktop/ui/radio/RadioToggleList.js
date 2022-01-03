import propTypes from 'prop-types';
import RadioList from './RadioList';
import React, { useCallback, useState } from 'react';

const RadioToggleList = props => {
  const { items, getResult } = props;
  const [value, setValue] = useState(items[0].value);
  const onChange = useCallback(e => {
    const result = e.target.value;
    setValue(result);
    getResult(result);
  }, []);

  console.log(items);

  return <RadioList items={items} value={value} onChange={onChange} />;
};

RadioToggleList.propTypes = {
  items: propTypes.array,
  getResult: propTypes.func
};

export default RadioToggleList;
