import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import Flex from 'components/common/utils/Flex';
import IconButton from 'components/common/utils/IconButton';

const UsageRestrictionsAdd = ({ callBackSave }) => {
  const [data] = useState(0);
  const saveData = () => {};

  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Flex direction="column" className="ms-4 me-4">
        <Flex direction="row">
          <div className="pe-2 w-50">
            <Form.Label className="fs--2">Tenant</Form.Label>
            <Form.Control type="email" className="fs--1" placeholder="" />
          </div>
          <div className="pe-2 w-50">
            <Form.Label className="fs--2">Service Type</Form.Label>
            <Form.Control type="email" className="fs--1" placeholder="" />
          </div>
        </Flex>
        <Flex direction="row">
          <div className="pe-2 w-100">
            <Form.Label className="fs--2">Restriction</Form.Label>
            <Form.Control type="email" className="fs--1" placeholder="" />
          </div>
        </Flex>
        <Flex direction="row">
          <div className="pe-2 w-100">
            <Form.Label className="fs--2">Json Override</Form.Label>
            <Form.Control type="email" className="fs--1" placeholder="" />
          </div>
        </Flex>

        <Flex justifyContent="between">
          <div>
            <Form.Label></Form.Label>
            <Flex justifyContent="center" alignItems="center">
              <Form.Check
                type="checkbox"
                id="Enable"
                label="Enable"
                className="pt-2"
              />
            </Flex>
          </div>
          <div>
            <IconButton
              className="me-2 mb-1 mt-4"
              size="sm"
              transform="shrink-3"
              onClick={() => {
                saveData(data);
                callBackSave();
              }}
            >
              Save
            </IconButton>
          </div>
        </Flex>
      </Flex>
    </Form.Group>
  );
};

UsageRestrictionsAdd.propTypes = {
  callBackSave: PropTypes.func
};

export default UsageRestrictionsAdd;
