import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Progress,
} from "@chakra-ui/react";
import React, { useState } from "react";

import Step1 from "../pages/Teams/Step1";
import Step2 from "../pages/Teams/Step2";
import Step3 from "../pages/Teams/Step3";

const Team = () => {
  const [page, setPage] = useState(1);

  const FormTitle = [
    "Personal Information",
    "Contact Information",
    "Choose Team",
  ];
  return (
    <Box>
      <Progress colorScheme="green" value={page} max={3} />
      <Container>
        <Heading size="xl" textAlign="center" my={5}>
          Create Team
        </Heading>
        <FormControl
          style={{ backgroundColor: "#fff" }}
          colorScheme="blue"
          borderRadius="xl"
          boxShadow="md"
          p={5}
        >
          <Heading fontWeight={"medium"} size="md" textAlign="center" mb={3}>
            {FormTitle[page - 1]}
          </Heading>
          {page === 1 ? (
            <Step1 />
          ) : page === 2 ? (
            <Step2 />
          ) : (
            page === 3 && <Step3 />
          )}
          <Box align={"right"} mt={3}>
            <Button
              display={page > 1 ? "inline-flex" : "none"}
              colorScheme="orange"
              mr={3}
              onClick={() => setPage((currentPage) => currentPage - 1)}
            >
              Previous
            </Button>
            <Button
              colorScheme="green"
              onClick={
                page === 3
                  ? () => {}
                  : () => setPage((currentPage) => currentPage + 1)
              }
            >
              {page === 3 ? "Submit" : "Next"}
            </Button>
          </Box>
        </FormControl>
      </Container>
    </Box>
  );
};

export default Team;
