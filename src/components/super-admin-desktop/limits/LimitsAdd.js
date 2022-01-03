import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import Flex from '../../common/utils/Flex';
import IconButton from '../../common/utils/IconButton';

const LimitsAdd = ({ callBackSave }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Flex direction="column" className="ms-4 me-4">
        <Flex direction="row">
          <div className="pe-2 w-50">
            <Form.Label className="fs--2">Tenant</Form.Label>
            <Form.Control type="email" className="fs--1" placeholder="" />
          </div>
          <div className="pe-2 w-50">
            <Form.Label className="fs--2">Criteria</Form.Label>
            <Form.Control type="email" className="fs--1" placeholder="" />
          </div>
        </Flex>
        <Flex direction="row">
          <div className="pe-2 w-50">
            <Form.Label className="fs--2">Ticket per Week</Form.Label>
            <Form.Control type="email" className="fs--1" placeholder="" />
          </div>
          <div className="pe-2 w-50">
            <Form.Label className="fs--2">Ticket value per week</Form.Label>
            <Form.Control type="email" className="fs--1" placeholder="" />
          </div>
        </Flex>
        <Flex justifyContent="between">
          <div>
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

LimitsAdd.propTypes = {
  callBackSave: PropTypes.func
};

export default LimitsAdd;
