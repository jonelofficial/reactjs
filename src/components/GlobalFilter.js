import { Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {

    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce(value=> {
        setFilter(value||undefined)
    },300)
  return (
    <Flex>
      <Text>Search</Text>
      <Input
        type="text"
        defaultValue={value || " "}
        onChange={(e) => {
            // setFilter(e.target.value)
        onChange(e.target.value)
        }}
      />
    </Flex>
  );
};
