import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from '../../common/utils/Flex';
import SoftBadge from '../../common/utils/SoftBadge';
import classNames from 'classnames';

const NavbarVerticalMenuItem = ({ route }) => {
  return (
    <Flex direction={'column'} alignItems="start">
      {(route.name === 'Settings' || route.name === 'Log out') && (
        <hr className="text-300 w-100 mb-2 mt-1" />
      )}
      <Flex>
        <div className="d-flex justify-content-center me-3">
          {route.icon && (
            <span className="nav-link-icon">
              <FontAwesomeIcon
                icon={route.icon}
                className={classNames({
                  'text-youtube fs-0 mt-1 max-content': route.name === 'Log out'
                })}
              />
            </span>
          )}
        </div>
        <span
          className={classNames('nav-link-text ps-1', {
            'text-youtube fs-0': route.name === 'Log out'
          })}
        >
          {route.name}
        </span>
        {route.badge && (
          <SoftBadge pill bg={route.badge.type} className="ms-2">
            {route.badge.text}
          </SoftBadge>
        )}
      </Flex>
    </Flex>
  );
};

// prop-types
const routeShape = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  to: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};
routeShape.children = PropTypes.arrayOf(PropTypes.shape(routeShape));
NavbarVerticalMenuItem.propTypes = {
  route: PropTypes.shape(routeShape).isRequired
};

export default React.memo(NavbarVerticalMenuItem);
