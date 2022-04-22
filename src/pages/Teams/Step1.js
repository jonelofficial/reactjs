import {
  Box,
  Button,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const Step1 = ({
  formState,
  setFormState,
  register,
  errors,
  page,
  setPage,
}) => {
  const { firstName, lastName } = formState;

  return (
    <>
      <FormLabel htmlFor="firstName">Firts Name:</FormLabel>
      <Input
        borderColor={errors.firstName && "red"}
        {...register("firstName")}
        id="firstName"
        placeholder="Enter your firt name..."
        defaultValue={firstName}
        onChange={(e) =>
          setFormState({ ...formState, firstName: e.target.value })
        }
      />

      <FormHelperText display={errors.firstName ? "block" : "none"} color="red">
        {errors.firstName && errors.firstName.message}
      </FormHelperText>

      <FormLabel htmlFor="firstName" mt={3}>
        Last Name:
      </FormLabel>
      <Input
        borderColor={errors.lastName && "red"}
        {...register("lastName")}
        id="lastName"
        placeholder="Enter your last name..."
        defaultValue={lastName}
        onChange={(e) =>
          setFormState({ ...formState, lastName: e.target.value })
        }
      />
      <FormHelperText display={errors.lastName ? "block" : "none"} color="red">
        {errors.lastName && errors.lastName.message}
      </FormHelperText>

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
          isDisabled={
            firstName === "" ||
            lastName === "" ||
            errors.firstName ||
            errors.lastName
              ? true
              : false
          }
          colorScheme="green"
          onClick={
            page !== 3 ? () => setPage((currentPage) => currentPage + 1) : ""
          }
        >
          {page === 3 ? "Submit" : "Next"}
        </Button>
      </Box>
    </>
  );
};

export default Step1;
