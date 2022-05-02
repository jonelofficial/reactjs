import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Button,
  Center,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import { getTeams } from "../../api/TeamsAPI";
import DeleteTeam from "./DeleteTeam";

const TeamList = () => {
  const { data, isLoading, isError } = useQuery("teams", getTeams);

  if (isLoading)
    return (
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  if (isError)
    return (
      <Center h="100vh">
        <Box>Error</Box>
      </Center>
    );

  return (
    <Box mt={3} maxW="container.xl" m="auto">
      <Link to="/team">
        <Button
          leftIcon={<AddIcon />}
          mb={3}
          colorScheme="green"
          variant="solid"
        >
          Create Team
        </Button>
      </Link>
      <Box
        boxShadow="lg"
        borderRadius="lg"
        maxH={"80vh"}
        maxW="container.xl"
        overflow="auto"
      >
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
                    id,
                  },
                  index
                ) => (
                  <DeleteTeam
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phoneNumber={phoneNumber}
                    teamGroup={teamGroup}
                    datePicker={datePicker}
                    id={id}
                    key={index}
                  />
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Outlet />
    </Box>
  );
};

export default TeamList;
