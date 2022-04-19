import { Box, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { AiOutlineRight } from "react-icons/ai";

const Documents = () => {
  // separator={<AiOutlineRight />}
  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <NavLink to="home" className={"breadCrumb"}>
            Home
          </NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NavLink to="docs" className={"breadCrumb"}>
            Docs
          </NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <NavLink to="archive" className={"breadCrumb"}>
            Archive
          </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box p={3}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Documents;
