import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { Box, Input, useColorMode } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({ search, setSearch }) => {
  const { colorMode } = useColorMode();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg="blue"
      alignItems="flex-start"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="3xl"
      position="relative"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<MdSearch mr="4" fontSize="16" color="grey" />}
        />
        <Input
          type="text"
          value={search}
          onChange={handleChange}
          bg={colorMode === "light" ? "white" : "black"}
          alignItems="center"
          borderRadius="3xl"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
