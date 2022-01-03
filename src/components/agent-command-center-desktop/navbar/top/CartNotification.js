import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from '../../../../context/Context';

const CartNotification = () => {
  const { setConfig } = useContext(AppContext);
  const handleShow = () => {
    setConfig('showCartPanel', true);
  };
  return (
    <Nav.Item>
      <div
        onClick={handleShow}
        className={classNames('px-0', {
          'notification-indicator notification-indicator-warning notification-indicator-fill cursor-pointer': true
        })}
      >
        <span className="notification-indicator-number">4</span>
        <FontAwesomeIcon
          icon="shopping-cart"
          transform="shrink-7"
          className="fs-4"
        />
      </div>
    </Nav.Item>
  );
};

export default CartNotification;
