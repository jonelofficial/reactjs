import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Calendar from "./pages/Calendar";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";
import Login from "./components/Login";

//Breadcrumbs
import Home from "./pages/DocumentsBreadcrumb/Home";
import Docs from "./pages/DocumentsBreadcrumb/Docs";
import Archive from "./pages/DocumentsBreadcrumb/Archive";

//Team Accordion
import TeamRed from "./pages/TeamsAccordion/TeamRed";
import TeamBlue from "./pages/TeamsAccordion/TeamBlue";
import TeamGreen from "./pages/TeamsAccordion/TeamGreen";

function App() {
  const [isSidebar, setSidebar] = useState(true);
  const [isLogin, setLogin] = useState(false);

  return (
    <Flex h={"100vh"} overflow={"hidden"} pos={"relative"}>
      {isLogin ? (
        <>
          <Sidebar isSidebar={isSidebar} setSidebar={setSidebar} />
          <Box
            w={"100%"}
            display={{
              base: isSidebar ? "none" : "block",
              sm: isSidebar ? "none" : "block",
              md: "block",
              lg: "block",
              xl: "block",
            }}
          >
            <Header
              isSidebar={isSidebar}
              setSidebar={setSidebar}
              isLogin={isLogin}
              setLogin={setLogin}
            />
            <Box p={3} h={"100%"} w={"100%"} pos={"absolute"}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Team */}
                <Route path="/team" element={<Team />} />
                <Route path="/team/team-red" element={<TeamRed />} />
                <Route path="/team/team-blue" element={<TeamBlue />} />
                <Route path="/team/team-green" element={<TeamGreen />} />

                <Route path="/calendar" element={<Calendar />} />
                <Route path="/document" element={<Documents />}>
                  <Route path="/document/" element={<Home />} />
                  <Route path="/document/home" element={<Home />} />
                  <Route path="/document/docs" element={<Docs />} />
                  <Route path="/document/archive" element={<Archive />} />
                </Route>
                <Route path="/report" element={<Reports />} />
              </Routes>
            </Box>
          </Box>
        </>
      ) : (
        <Login isLogin={isLogin} setLogin={setLogin} />
      )}
    </Flex>
  );
}

export default App;
