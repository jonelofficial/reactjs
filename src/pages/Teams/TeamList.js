import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import { getTeams } from "../../api/TeamsAPI";

const TeamList = () => {
  const { data, isLoading, isError } = useQuery("teams", getTeams);

  if (isLoading) return <Spinner />;
  if (isError) return <Box>Error</Box>;

  return (
    <Box>
      {data.map(({ firstName }, index) => (
        <Box key={index}>{firstName}</Box>
      ))}
    </Box>
  );
};

export default TeamList;
