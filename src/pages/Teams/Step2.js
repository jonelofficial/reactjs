import React from "react";
import {
  Box,
  Button,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

const Step2 = ({
  formState,
  setFormState,
  register,
  errors,
  page,
  setPage,
}) => {
  const { email, phoneNumber } = formState;

  return (
    <>
      <FormLabel htmlFor="email">Email:</FormLabel>
      <Input
        borderColor={errors.email && "red"}
        {...register("email")}
        id="email"
        placeholder="Enter your email..."
        defaultValue={email}
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
      />
      <FormHelperText display={errors.email ? "block" : "none"} color="red">
        {errors.email && errors.email.message}
      </FormHelperText>

      <FormLabel htmlFor="phoneNumber" mt={3}>
        Phone Number
      </FormLabel>
      <InputGroup borderColor={errors.phoneNumber && "red"}>
        <InputLeftAddon children="+63" />
        <Input
          {...register("phoneNumber")}
          id="phoneNumber"
          placeholder="9xxxxxxxxx"
          defaultValue={phoneNumber}
          maxLength={10}
          onChange={(e) =>
            setFormState({ ...formState, phoneNumber: e.target.value })
          }
        />
      </InputGroup>
      <FormHelperText
        display={errors.phoneNumber ? "block" : "none"}
        color="red"
      >
        {errors.phoneNumber && errors.phoneNumber.message}
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
            errors.email ||
            errors.phoneNumber ||
            email === "" ||
            phoneNumber === null
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

export default Step2;
