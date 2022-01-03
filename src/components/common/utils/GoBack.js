import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

const GoBack = () => {
  const history = useHistory();
  return (
    <div
      className="mb-0 cursor-pointer fw-semi-bold"
      onClick={() => history.goBack()}
    >
      <FontAwesomeIcon icon={faArrowLeft} size="sm" />
    </div>
  );
};
export default GoBack;
