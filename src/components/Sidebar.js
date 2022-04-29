import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AccordionSidebar from "../components/Sidebar/AccordionSidebar";
import SingleSidebar from "../components/Sidebar/SingleSidebar";

import "../App.css";
import Navlink from "../Navlink";

const Sidebar = ({ isSidebar, setSidebar, token }) => {
  return (
    <Box
      bg={"primary"}
      boxShadow={"2xl"}
      transition={"width .3s"}
      w={{
        base: isSidebar ? "100%" : "0%",
        sm: isSidebar ? "100%" : "0%",
        md: isSidebar ? "17em" : "0%",
        lg: isSidebar ? "17em" : "0%",
        xl: isSidebar ? "17em" : "0%",
      }}
    >
      <Box display={isSidebar ? "block" : "none"}>
        <Box p={3}>
          <Flex justify={"end"} alignItems={"center"}>
            <CloseButton
              onClick={() => setSidebar(!isSidebar)}
              color={"sidebarText"}
            />
          </Flex>
        </Box>
        <Box px={3}>
          {Navlink.map(({ name, accordion, icon, path, defaultShow }, index) =>
            defaultShow && accordion.length ? (
              <AccordionSidebar
                key={index}
                name={name}
                accordion={accordion}
                icon={icon}
                path={path}
              />
            ) : (
              defaultShow &&
              !accordion.length && (
                <SingleSidebar
                  key={index}
                  name={name}
                  icon={icon}
                  path={path}
                />
              )
            )
          )}

          {Navlink.map(({ name, accordion, icon, path, defaultShow }, index) =>
            token.priviledge.map((index) =>
              index === name.toUpperCase() && accordion.length ? (
                <AccordionSidebar
                  key={index}
                  name={name}
                  accordion={accordion}
                  icon={icon}
                  path={path}
                />
              ) : (
                index === name.toUpperCase() &&
                !accordion.length && (
                  <SingleSidebar
                    key={index}
                    name={name}
                    icon={icon}
                    path={path}
                  />
                )
              )
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
