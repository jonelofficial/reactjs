import { Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { getTeams } from "../../api/TeamsAPI";
import NewTeamList from "./NewTeamList";

const GetTeam = () => {
  const { data, isLoading, isError, isSuccess } = useQuery("teams", getTeams);
  if (isLoading) {
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
  }
  if (isError) {
    return (
      <Center h="100vh">
        <Box>Error</Box>
      </Center>
    );
  }
  if (isSuccess) {
    return (
      <>
        <NewTeamList TEAMDATA={data} />
        <Outlet />
      </>
    );
  }
};

export default GetTeam;
