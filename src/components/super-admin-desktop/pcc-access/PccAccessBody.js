import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState } from 'react';
import PCCAccessAdd from './PccAccessAdd';
import Flex from 'components/common/utils/Flex';
import TopPagesTable from './PccAccessTopPagesTable';
import IconButton from 'components/common/utils/IconButton';
import LimitsData from '../../../data/super-admin-desktop/adminData';
import { Card, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import FalconCloseButton from 'components/common/utils/FalconCloseButton';
import { TablePagination } from '../../common/advance-table/AdvanceTable';
import TopPagesSearchBox from 'components/dashboards/analytics/top-pages/TopPagesSearchBox';
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce
} from 'react-table';

const TopPages = () => {
  const columns = LimitsData[9].columns;
  const data = LimitsData[9].data;
  const [lgShow, setLgShow] = useState(false);
  const callBack = () => {
    setLgShow(false);
  };
  const {
    getTableProps,
    headers,
    pageCount,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    gotoPage,
    previousPage,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Card className="h-100">
      <Card.Header>
        <Row>
          <Col>
            <h6 className="mb-0 text-nowrap py-2 py-xl-0 text-1000 fs-2 mb-3">
              PCC Accesses
            </h6>
          </Col>
        </Row>
        <Row className="flex-between-center">
          <Col xs="auto" sm={4} lg={4}>
            <div>
              <TopPagesSearchBox
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
                useAsyncDebounce={useAsyncDebounce}
              />
            </div>
          </Col>
          <Col xs="auto" sm={8} lg={8}>
            <Flex justifyContent="end">
              <div className={'ms-3'}>
                <IconButton
                  className=""
                  size="sm"
                  icon="plus"
                  transform="shrink-3"
                  onClick={() => setLgShow(true)}
                >
                  Add PCC Access
                </IconButton>
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
                    <PCCAccessAdd callBackSave={callBack} />
                    {/* <LimitsBodyPagination></LimitsBodyPagination> */}
                  </Modal.Body>
                </Modal>
              </div>
            </Flex>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="p-0">
        <TopPagesTable
          getTableProps={getTableProps}
          headers={headers}
          page={page}
          prepareRow={prepareRow}
        />
      </Card.Body>
      <Card.Footer>
        <Row className="align-items-center">
          <Col>
            <p className="mb-0 fs--1">
              <span className="d-none d-sm-inline-block me-2">
                {pageSize * pageIndex + 1} to{' '}
                {pageSize * pageIndex + page.length} of {data.length}
              </span>

              <span className="d-none d-sm-inline-block me-2">
                <Form.Select
                  size="sm"
                  className="me-2"
                  onChange={({ target }) => gotoPage(target.value)}
                >
                  {Array.from(Array(pageCount).keys()).map((page, index) => (
                    <option
                      key={index}
                      className={classNames({ active: pageIndex === page })}
                      value={index}
                    >
                      Page : {page + 1}
                    </option>
                  ))}
                </Form.Select>
              </span>
            </p>
          </Col>
          <Col xs="auto" as={Flex}>
            <Button
              size="sm"
              variant={canPreviousPage ? 'primary' : 'light'}
              onClick={() => previousPage()}
              className={classNames({ disabled: !canPreviousPage })}
            >
              Previous
            </Button>
            <Button
              size="sm"
              variant={canNextPage ? 'primary' : 'light'}
              className={classNames('px-4 ms-2', {
                disabled: !canNextPage
              })}
              onClick={() => nextPage()}
            >
              Next
            </Button>
          </Col>
        </Row>
        <TablePagination
          pageIndex={pageIndex}
          pageCount={pageCount}
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </Card.Footer>
    </Card>
  );
};

TopPages.propTypes = {
  tableData: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        accessor: PropTypes.string.isRequired,
        Header: PropTypes.string.isRequired
      })
    ).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        path: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
        exitRate: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default TopPages;
