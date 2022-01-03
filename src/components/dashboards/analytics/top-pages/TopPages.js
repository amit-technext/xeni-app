import Flex from 'components/common/Flex';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import TopPagesTable from './TopPagesTable';
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce
} from 'react-table';
import classNames from 'classnames';
import SearchBox from './TopPagesSearchBox';

const TopPages = ({ tableData }) => {
  const { columns, data } = tableData;
  const {
    getTableProps,
    headers,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 8 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Card className="h-100">
      <Card.Header>
        <Row className="flex-between-center">
          <Col xs="auto" sm={6} lg={7}>
            <h6 className="mb-0 text-nowrap py-2 py-xl-0">
              What are my top pages today?
            </h6>
          </Col>
          <Col xs="auto" sm={6} lg={5}>
            <SearchBox
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
              useAsyncDebounce={useAsyncDebounce}
            />
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
