import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const Login = ({ isLogin, setLogin }) => {
  return (
    <Box w={"100%"}>
      <Center h={"100%"}>
        <FormControl w={"25em"} bg={"primary"} p={10} borderRadius={"2xl"}>
          <FormLabel htmlFor="username" color={"#fff"} fontSize={"lg"}>
            Username
          </FormLabel>
          <Input bg={"#fff"} id="username" type="text" />

          <FormLabel mt={3} color={"#fff"} htmlFor="password" fontSize={"lg"}>
            Password
          </FormLabel>
          <Input bg={"#fff"} id="password" type="password" />

          <Box mt={3} float={"right"}>
            <Button type={"submit"} onClick={() => setLogin(!isLogin)}>
              Login
            </Button>
          </Box>
        </FormControl>
      </Center>
    </Box>
  );
};

export default Login;
