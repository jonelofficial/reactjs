import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ isSidebar, setSidebar, token }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(true);
  };
  return (
    <Box>
      <Flex p={3} justify={"space-between"} alignItems={"center"} bg={"accent"}>
        <Flex alignItems={"center"}>
          <HamburgerIcon
            onClick={() => setSidebar(!isSidebar)}
            mr={3}
            boxSize={6}
            _hover={{ cursor: "pointer" }}
            display={isSidebar ? "none" : "block"}
            color={"#fff"}
          />
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight={"bold"}
            color={"#fff"}
          >
            System Title
          </Text>
        </Flex>

        <Flex alignItems={"center"}>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={"bold"}
            color={"#fff"}
            mr={6}
          >
            {`Hello ${token.firstName}`}
          </Text>
          <Menu>
            <MenuButton>
              <Avatar src="https://bit.ly/dan-abramov" />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<SettingsIcon />}>Setting</MenuItem>
              <MenuItem icon={<AiOutlineLogout />} onClick={handleLogout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
