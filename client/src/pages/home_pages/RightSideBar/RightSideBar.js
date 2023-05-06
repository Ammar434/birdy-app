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
      css={{
        "&::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background:
            "linear-gradient(90deg, rgba(174,3,216,1) 0%, rgba(227,13,135,1) 100%)",
          borderRadius: "10px",
          border: "solid 1px #dedede",
        },
      }}
      overflow="auto"
    >
      <SearchBar search={search} setSearch={setSearch} />
      <AllUser users={filteredUsers} />
    </Box>
  );
};
export default RightSideBar;
