import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Form } from 'react-bootstrap';

const Radio = memo(function Radio(props) {
  const { item, checked, onChange } = props;

  return (
    <Form.Check
      label={
        <p className={checked ? 'text-primary mb-0' : 'text-secondary mb-0'}>
          {item.label}
        </p>
      }
      id={item.label}
      className={'cursor-pointer me-3'}
      type="radio"
      value={item.value}
      checked={checked}
      onChange={onChange}
    />
  );
});

Radio.propTypes = {
  item: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Radio;
