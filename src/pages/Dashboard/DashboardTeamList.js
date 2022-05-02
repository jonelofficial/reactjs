import {
  Box,
  Button,
  Flex,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table/dist/react-table.development";
import { GlobalFilter } from "../../components/GlobalFilter";
import { COLUMNS } from "../../tables/dashboardTableColumns";
import React, { useMemo } from "react";

const DashboardTeamList = ({ DATATEAM }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATATEAM, [DATATEAM]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <>
      <Box
        w="container.xl"
        m="auto"
        minH={"45vh"}
        maxH={"50vh"}
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
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
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
                  <Tr {...row.getRowProps()}>
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
        </TableContainer>
      </Box>
      <Box pt="6" w="container.lg" m="auto" maxW="container.xl" overflow="auto">
        <Flex justifyContent="end" alignItems="center">
          <Text>Data to show</Text>
          <Box>
            <Select
              px="3"
              defaultValue={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </Select>
          </Box>

          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<< go to first page"}
          </Button>
          <Button
            disabled={!canPreviousPage}
            colorScheme="orange"
            onClick={() => previousPage()}
          >
            Previous
          </Button>
          <Text px="3">
            Page {pageIndex + 1} out of {pageCount}
          </Text>
          <Button
            disabled={!canNextPage}
            colorScheme="blue"
            onClick={() => nextPage()}
          >
            Next
          </Button>
          <Button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {"go to last page >>"}
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default DashboardTeamList;
