import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import PCCTenantsAdd from './PccTenantsAdd';
import SimpleBarReact from 'simplebar-react';
import { Button, Modal } from 'react-bootstrap';
import Avatar from 'components/common/utils/Avatar';
import SoftBadge from 'components/common/utils/SoftBadge';
import ActionButton from 'components/common/utils/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconCloseButton from 'components/common/utils/FalconCloseButton';

const TopPagesTable = ({ getTableProps, headers, page, prepareRow }) => {
  const callBack = () => {
    setEditShow(false);
  };
  const [editShow, setEditShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SimpleBarReact>
        <Table {...getTableProps()} className="fs--1 mb-0">
          <thead className="bg-200 text-900">
            <tr>
              {headers.map((column, index) => (
                <th
                  className={classNames('white-space-nowrap', {
                    'text-end': index !== 0
                  })}
                  key={index}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <span className="sort desc" />
                    ) : (
                      <span className="sort asc" />
                    )
                  ) : (
                    <span className="sort" />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          {page.length > 0 && (
            <tbody>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr key={i}>
                    <td
                      className={classNames('white-space-nowrap', {
                        'text-end': 2 !== 0
                      })}
                    >
                      <div className="d-flex align-items-center">
                        <Avatar
                          src={row.original.avatar}
                          size="l"
                          name={row.original.tenant}
                        />
                        <div className="ms-2">{row.original.tenant}</div>
                      </div>
                    </td>
                    <td
                      className={classNames('white-space-nowrap', {
                        'text-end': 2 !== 0
                      })}
                    >
                      <SoftBadge pill bg={row.original.status.type}>
                        <FontAwesomeIcon
                          icon={row.original.status.icon}
                          className="ms-2 me-2"
                        />
                        {row.original.status.title}
                      </SoftBadge>
                    </td>
                    <td
                      className={classNames('white-space-nowrap', {
                        'text-end': 2 !== 0
                      })}
                    >
                      {row.original.pcc}
                    </td>
                    <td
                      className={classNames('white-space-nowrap', {
                        'text-end': 2 !== 0
                      })}
                    >
                      <ActionButton
                        icon="edit"
                        title="Edit"
                        variant="action"
                        className="p-0"
                        onClick={() => setEditShow(true)}
                      />
                      |
                      <ActionButton
                        icon="ban"
                        title="Disable"
                        variant="action"
                        className="p-0"
                      />
                      |
                      <ActionButton
                        icon="trash-alt"
                        title="Delete"
                        variant="action"
                        className="p-0"
                        onClick={handleShow}
                      />
                    </td>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header>
                        <Modal.Title>Delete</Modal.Title>
                        <FalconCloseButton onClick={handleClose} />
                      </Modal.Header>
                      <Modal.Body>Are you sure to delete this Cor.</Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary "
                          className="me-2 mb-1"
                          onClick={handleClose}
                        >
                          Yes
                        </Button>
                        <Button
                          className="me-2 mb-1 text-white bg-youtube"
                          onClick={handleClose}
                        >
                          No
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Modal
                      size="lg"
                      show={editShow}
                      onHide={() => setEditShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Edit PCC Tenants
                        </Modal.Title>
                        <FalconCloseButton onClick={() => setEditShow(false)} />
                      </Modal.Header>
                      <Modal.Body>
                        <PCCTenantsAdd callBackSave={callBack} />
                      </Modal.Body>
                    </Modal>
                  </tr>
                );
              })}
            </tbody>
          )}
        </Table>
      </SimpleBarReact>
      {page.length === 0 && (
        <div className="text-center">
          <p className="fw-bold fs-1 mt-3">No data found</p>
        </div>
      )}
    </>
  );
};

TopPagesTable.propTypes = {
  getTableProps: PropTypes.func.isRequired,
  headers: PropTypes.array.isRequired,
  page: PropTypes.arrayOf(PropTypes.object).isRequired,
  prepareRow: PropTypes.func.isRequired
};

export default TopPagesTable;
