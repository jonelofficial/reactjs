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
import userAuth from "./Auth/userAuth";

//Breadcrumbs
import Home from "./pages/DocumentsBreadcrumb/Home";
import Docs from "./pages/DocumentsBreadcrumb/Docs";
import Archive from "./pages/DocumentsBreadcrumb/Archive";

//Team Accordion
import TeamList from "./pages/Teams/TeamList";

//React Query
import { QueryClientProvider, QueryClient } from "react-query";

function setToken(userToken) {}
function getToken() {}

function App() {
  const queryClient = new QueryClient();

  const [isSidebar, setSidebar] = useState(true);
  // const [isLogin, setLogin] = useState(false);

  // const [token, setToken] = useState({});
  const token = getToken();

  return (
    <Flex h={"100vh"} overflow={"hidden"} pos={"relative"}>
      {token ? (
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
            <Header isSidebar={isSidebar} setSidebar={setSidebar} />
            <Box p={3} h={"100%"} w={"100%"} bg={"#fafafa"}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Team */}
                <Route path="/team" element={<Team />} />

                <Route
                  path="/team/team-list"
                  element={
                    <QueryClientProvider client={queryClient}>
                      <TeamList />
                    </QueryClientProvider>
                  }
                />

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
        <QueryClientProvider client={queryClient}>
          <Login token={token} setToken={setToken} />
        </QueryClientProvider>
      )}
    </Flex>
  );
}

export default App;
