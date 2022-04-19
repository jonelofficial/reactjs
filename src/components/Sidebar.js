import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineCalendar,
  AiOutlineFilePdf,
  AiOutlineBarChart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

import "../App.css";

const Sidebar = ({ isSidebar, setSidebar }) => {
  return (
    <Box
      display={isSidebar ? "block" : "none"}
      bg={"primary"}
      boxShadow={"2xl"}
      w={{
        base: isSidebar ? "100%" : "0%",
        sm: isSidebar ? "100%" : "0%",
        md: "17em",
        lg: "17em",
        xl: "17em",
      }}
    >
      <Box p={3}>
        <Flex justify={"end"} alignItems={"center"}>
          <CloseButton
            onClick={() => setSidebar(!isSidebar)}
            color={"sidebarText"}
          />
        </Flex>
      </Box>
      <Box px={3}>
        <NavLink to="/">
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
            <AiOutlineHome size={25} style={{ color: "#fff" }} />

            <Text ml={3} color={"sidebarText"}>
              Dashboard
            </Text>
          </Flex>
        </NavLink>

        <Accordion allowMultiple>
          <AccordionItem border={"0px"}>
            <NavLink to="/team">
              <AccordionButton
                p={"0"}
                display={"contents"}
                _hover={{ bg: "#fff0" }}
                _focus={{ boxShadow: "#fff0" }}
              >
                <Flex
                  className={"sidebarNav"}
                  alignItems={"center"}
                  py={2.5}
                  px={4}
                  borderRadius={"lg"}
                  _hover={{ bg: "secondary" }}
                  cursor={"pointer"}
                  mb={2}
                  justify={"space-between"}
                >
                  <Flex>
                    <AiOutlineTeam size={25} style={{ color: "#fff" }} />
                    <Text ml={3} color={"sidebarText"}>
                      Teams
                    </Text>
                  </Flex>

                  <AccordionIcon color={"#fff"} />
                </Flex>
              </AccordionButton>
            </NavLink>
            <NavLink to="/team/team-red">
              <AccordionPanel
                py={2.5}
                color={"#fff"}
                _hover={{ bg: "secondary" }}
                cursor={"pointer"}
                borderRadius={"lg"}
                className={"accordionLink"}
              >
                Team red
              </AccordionPanel>
            </NavLink>

            <NavLink to="/team/team-blue">
              <AccordionPanel
                py={2.5}
                color={"#fff"}
                _hover={{ bg: "secondary" }}
                cursor={"pointer"}
                borderRadius={"lg"}
                className={"accordionLink"}
              >
                Team blue
              </AccordionPanel>
            </NavLink>

            <NavLink to="/team/team-green">
              <AccordionPanel
                py={2.5}
                color={"#fff"}
                _hover={{ bg: "secondary" }}
                cursor={"pointer"}
                borderRadius={"lg"}
                className={"accordionLink"}
              >
                Team green
              </AccordionPanel>
            </NavLink>
          </AccordionItem>
        </Accordion>

        <NavLink to="/calendar">
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
            <AiOutlineCalendar size={25} style={{ color: "#fff" }} />
            <Text ml={3} color={"sidebarText"}>
              Calendar
            </Text>
          </Flex>
        </NavLink>

        <NavLink to="/document">
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
            <AiOutlineFilePdf size={25} style={{ color: "#fff" }} />
            <Text ml={3} color={"sidebarText"}>
              Documents
            </Text>
          </Flex>
        </NavLink>

        <NavLink to="/report">
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
            <AiOutlineBarChart size={25} style={{ color: "#fff" }} />
            <Text ml={3} color={"sidebarText"}>
              Reports
            </Text>
          </Flex>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Sidebar;
