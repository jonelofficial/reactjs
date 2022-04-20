import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const SingleSidebar = ({ name, icon, path }) => {
  return (
    <NavLink to={path}>
      <Flex
        className={"sidebarNav"}
        alignItems={"center"}
        py={2.5}
        px={4}
        borderRadius={"lg"}
        _hover={{ bg: "secondary" }}
        cursor={"pointer"}
        mb={2}
      >
        <Icon as={icon} boxSize={6} style={{ color: "#fff" }} />

        <Text ml={3} color={"sidebarText"}>
          {name}
        </Text>
      </Flex>
    </NavLink>
  );
};

export default SingleSidebar;
