import {
  Box,
  CloseButton,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState("");

  const handleClearButton = () => {
    setValue("");
    setFilter(null);
  };

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 200);
  return (
    <Flex alignItems="center">
      <Text pr="3" fontWeight="bold">
        Search:
      </Text>

      <InputGroup>
        <Input
          w="20em"
          type="text"
          value={value}
          // defaultValue={value || null}
          onChange={(e) => {
            setFilter(e.target.value);
            // onChange(e.target.value);
            setValue(e.target.value);
          }}
        />
        <InputRightElement>
          <CloseButton
            onClick={handleClearButton}
            display={value === "" ? "none" : "block"}
            size="sm"
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
