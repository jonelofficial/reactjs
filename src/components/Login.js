import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../Schema";
import { getUsers } from "../api/LoginAPI";
import { useMutation } from "react-query";
import useToken from "../Auth/useToken";

const Login = ({ setToken }) => {
  //POST login data to api
  const {
    mutateAsync,
    isLoading,
    isSuccess,
    isError,
    data: mutateData,
  } = useMutation(getUsers);

  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(loginSchema) });

  // Handle form submit
  const onSubmit = async (data) => {
    await mutateAsync(data);
  };

  if (isError) {
    alert("Email or password incorrect");
  }

  if (isSuccess) {
    setToken(mutateData.accessToken);
  }

  return (
    <Box w={"100%"}>
      <Center h={"100%"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl w={"25em"} bg={"primary"} p={10} borderRadius={"2xl"}>
            <FormLabel htmlFor="username" color={"#fff"} fontSize={"lg"}>
              Email
            </FormLabel>
            <Input {...register("email")} bg={"#fff"} id="email" type="email" />
            <FormHelperText
              display={errors.email ? "block" : "none"}
              color="red"
            >
              {errors.email && errors.email.message}
            </FormHelperText>

            <FormLabel mt={3} color={"#fff"} htmlFor="password" fontSize={"lg"}>
              Password
            </FormLabel>
            <Input
              {...register("password")}
              bg={"#fff"}
              id="password"
              type="password"
            />
            <FormHelperText
              display={errors.password ? "block" : "none"}
              color="red"
            >
              {errors.password && errors.password.message}
            </FormHelperText>

            <Box mt={6} textAlign="end">
              <Button isLoading={isLoading} type="submit" colorScheme="purple">
                Login
              </Button>
            </Box>
          </FormControl>
        </form>
      </Center>
    </Box>
  );
};

export default Login;
