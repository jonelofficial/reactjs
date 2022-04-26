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
import useToken from "./Auth/useToken";

//Breadcrumbs
import Home from "./pages/DocumentsBreadcrumb/Home";
import Docs from "./pages/DocumentsBreadcrumb/Docs";
import Archive from "./pages/DocumentsBreadcrumb/Archive";

//Team Accordion
import TeamList from "./pages/Teams/TeamList";

//React Query
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const queryClient = new QueryClient();

  const [isSidebar, setSidebar] = useState();

  const { token, setToken } = useToken();

  if (!token) {
    return (
      <QueryClientProvider client={queryClient}>
        <Flex h={"100vh"} overflow={"hidden"}>
          <Login setToken={setToken} />
        </Flex>
      </QueryClientProvider>
    );
  }
  return (
    <Flex h={"100vh"} overflow={"hidden"} pos={"relative"}>
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
        <Header isSidebar={isSidebar} setSidebar={setSidebar} token={token} />
        <Box p={3} h={"100%"} w={"100%"} bg={"#fafafa"}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

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
    </Flex>
  );
}

export default App;
