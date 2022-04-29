import { Box, Button, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleOnClikc = () => {
    navigate("/");
  };
  return (
    <Box w="container.xl" h="80vh" m="auto">
      <Center h="100%" d="flex" flexDirection="column">
        <Box mb={3} color="red">
          ERROR 404 - Page Not Found
        </Box>
        <Button colorScheme="teal" onClick={handleOnClikc}>
          Go Home
        </Button>
      </Center>
    </Box>
  );
};

export default PageNotFound;
