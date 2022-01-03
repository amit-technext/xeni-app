import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Flex from 'components/common/utils/Flex';
import { Modal, Form, Button } from 'react-bootstrap';
import cloudUpload from '../../assets/icon/cloud-upload.svg';
import FalconCloseButton from 'components/common/utils/FalconCloseButton';

const UploadCorPage = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [lgShow, setLgShow] = useState(false);

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className={'w-75'}>
      <Flex justifyContent="end">
        <Button
          className="me-4 mb-1 "
          size="sm"
          icon="plus"
          transform="shrink-3"
          onClick={() => setLgShow(true)}
        >
          Add PCC Access
        </Button>
      </Flex>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add PCC Access
          </Modal.Title>
          <FalconCloseButton onClick={() => setLgShow(false)} />
        </Modal.Header>
        <Modal.Body>
          <div>
            <Flex>
              <Form.Group controlId="formFile" className="mb-3 ">
                <Form.Label>
                  Uploading a .csv file will replace all existing CORs
                </Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Flex>
            <Flex justifyContent="end">
              <Button
                className="me-4 mb-1 "
                size="sm"
                icon="plus"
                transform="shrink-3"
                onClick={() => setLgShow(false)}
              >
                Upload
              </Button>
            </Flex>
          </div>
        </Modal.Body>
      </Modal>
      <div className="mx-4">
        <div {...getRootProps({ className: 'dropzone-area py-10 mx-auto' })}>
          <input {...getInputProps({ multiple: false })} />
          <Flex justifyContent="center">
            <img src={cloudUpload} alt="" width={25} className="me-2" />
            <p className="fs-0 mb-0 text-700">Drop your file here</p>
          </Flex>
        </div>
        <div className="mt-3">
          {acceptedFiles.length > 0 && (
            <>
              <h6>File</h6>
              <ul>{files}</ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadCorPage;
