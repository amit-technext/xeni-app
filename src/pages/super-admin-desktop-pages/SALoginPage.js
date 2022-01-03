import React from 'react';
import { Card } from 'react-bootstrap';
import LoginForm from '../../components/super-admin-desktop/login/LoginForm';
import Divider from '../../components/common/utils/Divider';

const SALoginPage = () => (
  <div className="d-flex justify-content-center align-items-center ">
    <Card className={'w-xxl-30 w-xl-40 w-sm-50 mx-auto my-8'}>
      <Card.Body>
        <Divider className="mb-4">
          <h5>Super Admin</h5>
        </Divider>
        <LoginForm />
      </Card.Body>
    </Card>
  </div>
);

export default SALoginPage;
