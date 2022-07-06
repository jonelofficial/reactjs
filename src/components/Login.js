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

import { decodeToken } from "react-jwt";

const Login = ({ setToken, token }) => {
  //POST login data to api
  const {
    mutateAsync,
    isLoading,
    isError,
    isSuccess,
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
    const result = await mutateAsync(data);
    // localStorage.setItem(
    //   "token",
    //   JSON.stringify(
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FjdGl2ZSI6dHJ1ZSwicHJpdmlsZWRnZSI6WyJDUkVBVEUgVElDS0VUIiwiUkVRVUVTVEVSIiwiREVQQVJUTUVOVCIsIk1FTUJFUlMiLCJURUFNUyIsIkNBVEVHT1JZIiwiQ0hBTk5FTFMiXSwiX2lkIjoiNjI0ZDM0OTBkZTljNmMyMDY0ZGNmODYzIiwiZmlyc3ROYW1lIjoiSm9uZWwiLCJsYXN0TmFtZSI6Ik1hbmFsbyIsImRlcGFydG1lbnRJZCI6IjYyNGQzMjgwZGU5YzZjMjA2NGRjZjgyZSIsInVuaXRJZCI6IjYyNGQzNDc1ZGU5YzZjMjA2NGRjZjg1YyIsImVtYWlsIjoianVkZUBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTA2VDA2OjM0OjU2LjUyNFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTA2VDA2OjM0OjU2LjUyNFoiLCJfX3YiOjAsInNlc3Npb24iOiI2MjY4ZjY5ZjE2ZmI0MTQ4NDgwMmI3ODUiLCJpYXQiOjE2NTEwNDYwNDcsImV4cCI6MTY1MTA3NDg0N30.hshIdjhW93ucMoZdNV6xnEKOY_X4m05inANsbno9Zsk"
    //   )
    // );
    // const userTokens = JSON.parse(localStorage.getItem("token"));
    // const myDecodedToken = decodeToken(JSON.stringify(userTokens));
    // setToken(userTokens);
    // console.log(myDecodedToken);
  };

  if (isError) {
    alert("Email or password incorrect");
  }

  if (isSuccess) {
    setToken(mutateData.accessToken);
    console.log(mutateData);
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
