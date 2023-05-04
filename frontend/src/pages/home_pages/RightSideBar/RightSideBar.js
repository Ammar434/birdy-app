import { Box } from "@chakra-ui/react";
import React from "react";
import SearchBar from "./components/SearchBar";
import AllUser from "./components/AllUser";
import { useState } from "react";
import { useSearch } from "../../../hooks/useSearch";

const RightSideBar = () => {
  const [search, setSearch] = useState("");
  const [filteredUsers] = useSearch(search);

  return (
    <Box
      w="full"
      h="full"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <SearchBar search={search} setSearch={setSearch} />
      <AllUser users={filteredUsers} />
    </Box>
  );
};
export default RightSideBar;
