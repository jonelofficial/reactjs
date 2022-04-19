import { Box, Button, CloseButton, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import api from "../api/teams";

const Team = () => {
  //Fetch
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/Teams")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  // useEffect(getData());

  //Post
  const createTeam = async () => {
    let res = await api.post("/Teams", { name: "test", id: 11 });
    console.log(res);
  };

  //Delete
  const deleteTeam = async (id) => {
    await api.delete(`/Teams/${id}`);
  };

  return (
    <Box>
      <Box>
        {data.map(({ name, id }) => (
          <Flex key={id}>
            {name}
            <CloseButton onClick={() => deleteTeam(id)} />
          </Flex>
        ))}
        <Button onClick={createTeam}>Static Post Team</Button>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Team;
