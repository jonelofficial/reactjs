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

const Header = ({ isSidebar, setSidebar, setLogin, isLogin }) => {
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
          <Text fontSize={"3xl"} fontWeight={"bold"} color={"#fff"}>
            System Title
          </Text>
        </Flex>
        <Box>
          <Menu>
            <MenuButton>
              <Avatar size={"md"} src="https://bit.ly/dan-abramov" />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<SettingsIcon />}>Setting</MenuItem>
              <MenuItem
                icon={<AiOutlineLogout />}
                onClick={() => setLogin(!isLogin)}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
