import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const AccordionSidebar = ({ name, accordion, icon, path }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem border={"0px"}>
        <NavLink to={path}>
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
                <Icon as={icon} boxSize={6} style={{ color: "#fff" }} />
                <Text ml={3} color={"sidebarText"}>
                  {name}
                </Text>
              </Flex>

              <AccordionIcon color={"#fff"} />
            </Flex>
          </AccordionButton>
        </NavLink>
        {accordion.map(({ name, path }, index) => (
          <NavLink to={path} key={index}>
            <AccordionPanel
              py={2.5}
              color={"#fff"}
              _hover={{ bg: "secondary" }}
              cursor={"pointer"}
              borderRadius={"lg"}
              className={"accordionLink"}
            >
              {name}
            </AccordionPanel>
          </NavLink>
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionSidebar;
