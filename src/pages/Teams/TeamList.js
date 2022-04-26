import {
  Box,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { getTeams } from "../../api/TeamsAPI";

const TeamList = () => {
  const { data, isLoading, isError } = useQuery("teams", getTeams);

  if (isLoading) return <Spinner />;
  if (isError) return <Box>Error</Box>;

  return (
    <Box boxShadow="lg" borderRadius="lg" minW="container.xl" m="auto" mt={10}>
      <TableContainer>
        <Table variant="striped" size="sm">
          <TableCaption>Team Details</TableCaption>
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Team Group</Th>
              <Th>Date Created</Th>
              <Th textAlign="center">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(
              (
                {
                  firstName,
                  lastName,
                  email,
                  phoneNumber,
                  teamGroup,
                  datePicker,
                },
                index
              ) => (
                <Tr key={index}>
                  <Td>{firstName}</Td>
                  <Td>{lastName}</Td>
                  <Td>{email}</Td>
                  <Td>{phoneNumber}</Td>
                  <Td>{teamGroup}</Td>
                  <Td>{datePicker}</Td>
                  <Td textAlign="center">
                    <Button colorScheme="teal" size="sm" mr={3}>
                      Edit
                    </Button>
                    <Button colorScheme="red" size="sm">
                      Delete
                    </Button>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TeamList;
