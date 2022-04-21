import React from "react";
import { FormHelperText, FormLabel, Input } from "@chakra-ui/react";

const Step2 = ({ formState, setFormState }) => {
  const { email, phoneNumber } = formState;
  return (
    <>
      <FormLabel htmlFor="email">Email:</FormLabel>
      <Input
        type="email"
        id="email"
        placeholder="Enter your email..."
        defaultValue={email}
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
      />
      <FormHelperText>Error's show here!</FormHelperText>
      <FormLabel htmlFor="phoneNumber" mt={3}>
        Phone Number:
      </FormLabel>
      <Input
        type="number"
        id="phoneNumber"
        placeholder="Enter your phone number..."
        defaultValue={phoneNumber}
        onChange={(e) =>
          setFormState({ ...formState, phoneNumber: e.target.value })
        }
      />
      <FormHelperText>Error's show here!</FormHelperText>
    </>
  );
};

export default Step2;
