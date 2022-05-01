import {
  Box,
  Button,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table/dist/react-table.development";
import { GlobalFilter } from "../components/GlobalFilter";
import { COLUMNS, GROUPED_COLUMNS } from "../tables/dashboardTableColumns";
import { DATA } from "../tables/dashboardTableData";

const Dashboard = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <Box
      w="container.lg"
      m="auto"
      maxH={"80vh"}
      maxW="container.xl"
      overflow="auto"
    >
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <TableContainer>
        <Table
          variant="striped"
          colorScheme="gray"
          size="sm"
          {...getTableProps()}
        >
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "🔽"
                          : "🔼"
                        : ""}
                    </span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Select
          defaultValue={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </Button>
        <Button
          disabled={!canPreviousPage}
          colorScheme="orange"
          onClick={() => previousPage()}
        >
          Previous
        </Button>
        <Text>
          Page {pageIndex + 1} out of {pageCount}
        </Text>
        <Button
          disabled={!canNextPage}
          colorScheme="blue"
          onClick={() => nextPage()}
        >
          Next
        </Button>
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </Button>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
