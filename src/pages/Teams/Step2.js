import React from "react";
import { FormHelperText, FormLabel, Input } from "@chakra-ui/react";

const Step2 = () => {
  return (
    <>
      <FormLabel htmlFor="email">Email:</FormLabel>
      <Input type="email" id="email" placeholder="Enter youremail..." />
      <FormHelperText>Error's show here!</FormHelperText>
      <FormLabel htmlFor="phoneNumber" mt={3}>
        Phone Number:
      </FormLabel>
      <Input
        type="number"
        id="phoneNumber"
        placeholder="Enter your phone number..."
      />
      <FormHelperText>Error's show here!</FormHelperText>
    </>
  );
};

export default Step2;
