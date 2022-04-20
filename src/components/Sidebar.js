import { Box, CloseButton, Flex } from "@chakra-ui/react";
import React from "react";
import AccordionSidebar from "../components/Sidebar/AccordionSidebar";
import SingleSidebar from "../components/Sidebar/SingleSidebar";

import "../App.css";
import Navlink from "../Navlink";

const Sidebar = ({ isSidebar, setSidebar }) => {
  return (
    <Box
      // display={isSidebar ? "block" : "none"}
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
          {Navlink.map(({ name, accordion, icon, path }, index) =>
            accordion.length ? (
              <AccordionSidebar
                key={index}
                name={name}
                accordion={accordion}
                icon={icon}
                path={path}
              />
            ) : (
              <SingleSidebar key={index} name={name} icon={icon} path={path} />
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
