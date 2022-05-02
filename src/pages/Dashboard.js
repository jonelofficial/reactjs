import { Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";

import { getTeams } from "../api/TeamsAPI";
import DashboardTeamList from "./Dashboard/DashboardTeamList";

const Dashboard = () => {
  const { data, isLoading, isError, isSuccess } = useQuery("teams", getTeams);
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
  if (isSuccess) {
    return <DashboardTeamList DATATEAM={data} />;
  }

  return <></>;
};

export default Dashboard;
