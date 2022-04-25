import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../Schema";

const Login = ({ isLogin, setLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(loginSchema) });

  const toast = useToast();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box w={"100%"}>
      <Center h={"100%"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl w={"25em"} bg={"primary"} p={10} borderRadius={"2xl"}>
            <FormLabel htmlFor="username" color={"#fff"} fontSize={"lg"}>
              Username
            </FormLabel>
            <Input
              {...register("username")}
              bg={"#fff"}
              id="username"
              type="text"
            />
            <FormHelperText
              display={errors.username ? "block" : "none"}
              color="red"
            >
              {errors.username && errors.username.message}
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
              <Button
                type="submit"
                colorScheme="purple"
                // onSubmit={!errors.username && !errors.password ? loginke() : ""}
              >
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
