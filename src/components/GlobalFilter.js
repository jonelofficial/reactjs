import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 200);
  return (
    <Flex alignItems="center">
      <Text pr="3" fontWeight="bold">
        Search:
      </Text>
      <Input
        w="20em"
        type="text"
        defaultValue={value || null}
        onChange={(e) => {
          setFilter(e.target.value);
          // onChange(e.target.value);
        }}
      />
    </Flex>
  );
};
