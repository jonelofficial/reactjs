import { FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const Step1 = ({ formState, setFormState }) => {
  const { firstName, lastName } = formState;
  return (
    <>
      <FormLabel htmlFor="firstName">Firts Name:</FormLabel>
      <Input
        type="text"
        id="firstName"
        placeholder="Enter your firt name..."
        defaultValue={firstName}
        onChange={(e) =>
          setFormState({ ...formState, firstName: e.target.value })
        }
      />
      <FormHelperText>Error's show here!</FormHelperText>
      <FormLabel htmlFor="firstName" mt={3}>
        Last Name:
      </FormLabel>
      <Input
        type="text"
        id="lastName"
        placeholder="Enter your last name..."
        defaultValue={lastName}
        onChange={(e) =>
          setFormState({ ...formState, lastName: e.target.value })
        }
      />
      <FormHelperText>Error's show here!</FormHelperText>
    </>
  );
};

export default Step1;
