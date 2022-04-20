import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Team = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required().min(10),
    lastName: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <Box>
      <Box w={{ base: "100%", sm: "100%", md: "50%", xl: "30%" }}>
        <form onSubmit={onSubmit}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            {...register("firstName")}
            type="text"
            id="firstName"
            placeholder="Enter frist name..."
          />
          {errors.firstName ? (
            <span style={{ color: "red" }}>
              This field is required and minimum of 10 characters
            </span>
          ) : (
            ""
          )}
          <FormLabel htmlFor="lastName" mt={3}>
            Last Name
          </FormLabel>

          <Input
            {...register("lastName")}
            type="text"
            id="lastName"
            placeholder="Enter last name..."
          />
          {errors.lastName ? (
            <span style={{ color: "red" }}>This field is required</span>
          ) : (
            ""
          )}
          <Box float="right">
            <Button type="submit">Submit</Button>
          </Box>
        </form>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Team;
