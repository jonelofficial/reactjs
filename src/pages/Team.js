import { Box, Button, CloseButton, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// hook
const Team = () => {
  return (
    <Box>
      <Box>
        <Button>Static Post Team</Button>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Team;
