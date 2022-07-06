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
import React, { useMemo } from "react";
import { COLUMNS } from "../../tables/TeamColumns";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table/dist/react-table.development";
import { AddIcon } from "@chakra-ui/icons";
import { GlobalFilter } from "../../components/GlobalFilter";
import { Link } from "react-router-dom";

const NewTeamList = ({ TEAMDATA }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => TEAMDATA, [TEAMDATA]);

  const {
    //for table
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    //for filtering
    setGlobalFilter,
    //for pagination
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    setPageSize,
    state,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Flex justifyContent="space-between" mb="3">
        <Link to="/team">
          <Button leftIcon={<AddIcon />} colorScheme="green" variant="solid">
            Create User
          </Button>
        </Link>

        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </Flex>

      <Box minH="70vh" maxH="70vh" overflow="auto">
        <TableContainer>
          <Table
            size="sm"
            variant="striped"
            colorScheme="gray"
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
      <Flex mt="3" justifyContent="center" alignItems="center">
        <Flex alignItems="center">
          <Text>Data to show</Text>
          <Box>
            <Select
              px="3"
              pr="1"
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
        </Flex>

        <Button
          mx="3"
          colorScheme="blue"
          variant="outline"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          size="sm"
        >
          {"<< Go To First Page"}
        </Button>
        <Button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          colorScheme="orange"
          variant="solid"
          mr="3"
          size="sm"
        >
          Previous
        </Button>
        <Button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          colorScheme="blue"
          variant="solid"
          size="sm"
        >
          Next
        </Button>
        <Button
          mx="3"
          colorScheme="blue"
          variant="outline"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          size="sm"
        >
          {"Go To Last Page>>"}
        </Button>
        <Text>
          Page {pageIndex + 1} out of {pageCount}
        </Text>
      </Flex>
    </>
  );
};

export default NewTeamList;
