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
import EditTeam from "./pages/Teams/EditTeam";

//React Query
import { QueryClientProvider, QueryClient } from "react-query";
import PageNotFound from "./components/PageNotFound";

import DashboardDelete from "./pages/Dashboard/DashboardDelete";
import GetTeam from "./pages/Teams/GetTeam";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const { token, setToken } = useToken();
  const [isSidebar, setSidebar] = useState();

  if (!token) {
    return (
      <QueryClientProvider client={queryClient}>
        <Flex h={"100vh"} overflow={"hidden"}>
          <Login setToken={setToken} token={token} />
        </Flex>
      </QueryClientProvider>
    );
  }

  return (
    <Flex h={"100vh"} overflow={"hidden"} pos={"relative"}>
      <Sidebar isSidebar={isSidebar} setSidebar={setSidebar} token={token} />
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
        <Box p={3} h={"100%"} w={"100%"}>
          <Routes>
            <Route
              path="/"
              element={
                <QueryClientProvider client={queryClient}>
                  <Dashboard />
                </QueryClientProvider>
              }
            />
            <Route
              path="/dashboard"
              element={
                <QueryClientProvider client={queryClient}>
                  <Dashboard />
                </QueryClientProvider>
              }
            />
            <Route
              path="/dashboard/delete/:id"
              element={
                <QueryClientProvider client={queryClient}>
                  <DashboardDelete />
                </QueryClientProvider>
              }
            />
            <Route path="/calendar" element={<Calendar />} />

            {token.priviledge.includes("TEAMS") ? (
              <Route
                path="/team"
                element={
                  <QueryClientProvider client={queryClient}>
                    <Team />{" "}
                  </QueryClientProvider>
                }
              />
            ) : (
              <Route path="/team" element={<PageNotFound />} />
            )}

            {token.priviledge.includes("TEAMS") ? (
              <Route
                path="/team/team-list"
                element={
                  <QueryClientProvider client={queryClient}>
                    <GetTeam />
                  </QueryClientProvider>
                }
              >
                <Route
                  path="/team/team-list/edit-team/:id"
                  element={<EditTeam />}
                />
              </Route>
            ) : (
              <Route path="/team" element={<PageNotFound />} />
            )}

            {token.priviledge.includes("REQUESTER") ? (
              <Route path="/document" element={<Documents />}>
                <Route path="/document/" element={<Home />} />
                <Route path="/document/home" element={<Home />} />
                <Route path="/document/docs" element={<Docs />} />
                <Route path="/document/archive" element={<Archive />} />
              </Route>
            ) : (
              <Route path="/document" element={<PageNotFound />} />
            )}

            {token.priviledge.includes("SUPPORT") ? (
              <Route path="/report" element={<Reports />} />
            ) : (
              <Route path="/report" element={<PageNotFound />} />
            )}

            <Route path="*" exact={true} element={<PageNotFound />} />
          </Routes>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
