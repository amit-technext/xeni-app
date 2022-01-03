import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Table from 'react-bootstrap/Table';
import SimpleBarReact from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'react-bootstrap';
import RestrictionAdd from './RestrictionsAdd';
import ActionButton from '../../common/utils/ActionButton';
import FalconCloseButton from '../../common/utils/FalconCloseButton';
import Avatar from '../../common/utils/Avatar';
import SoftBadge from '../../common/utils/SoftBadge';

const TopPagesTable = ({ getTableProps, headers, page, prepareRow }) => {
  const [editShow, setEditShow] = useState(false);
  const [show, setShow] = useState(false);

  const callBack = () => {
    setEditShow(false);
  };
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
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr key={index}>
                    <td
                      className={classNames('white-space-nowrap', {
                        'text-end': 2 !== 0
                      })}
                    >
                      <div className="d-flex align-items-center">
                        <Avatar
                          src={row.original.avatar}
                          size="l"
                          name={row.original.Tanent}
                        />
                        <div className="ms-2">
                          {row.original.Tanent}
                          <div className="fs--2 text-info">
                            {' '}
                            {row.original.origin} - {row.original.destination}
                          </div>
                        </div>
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
                      {row.original.Cabin}
                    </td>
                    <td
                      className={classNames('white-space-nowrap', {
                        'text-end': 2 !== 0
                      })}
                    >
                      {row.original.Carriar}
                    </td>
                    <td
                      className={classNames('white-space-nowrap', {
                        'text-end': 2 !== 0
                      })}
                    >
                      {row.original.RBD}
                    </td>
                    <td
                      className={classNames('white-space-nowrap', {
                        'text-end': 2 !== 0
                      })}
                    >
                      {row.original.FlightNumber}
                    </td>
                    <td
                      className={classNames('white-space-nowrap', {
                        'text-end': 2 !== 0
                      })}
                    >
                      {row.original.ServiceType}
                    </td>

                    <td className="text-end">
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
                      <Modal.Body>
                        Are you sure to delete this profile.
                      </Modal.Body>
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
                          Edit Restriction
                        </Modal.Title>
                        <FalconCloseButton onClick={() => setEditShow(false)} />
                      </Modal.Header>
                      <Modal.Body>
                        <RestrictionAdd callBackSave={callBack} />
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
