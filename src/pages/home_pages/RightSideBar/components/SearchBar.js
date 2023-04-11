import { Icon, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { Box, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";    


const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isSearchingError, setIsSearchingError] = useState(false);

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSearching(true);
        setIsSearchingError(false);
        // Search for the user
        // If the user is found, then we can redirect him to his profile
        // If the user is not found, then we can display an error message
    }

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
                children={<MdSearch mr='4' fontSize="16" />}
            />
            <Input 
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleChange}
                bg="white"
                alignItems="center"
                bordeRadius="3xl"
                _hover=
                {{
                    bg: "white",
                    color: "purple", 
                    borderColor: "purple.100",
                }}
                />
                


        </InputGroup>            

        {/* A garder au cas ou l'application est mobile, car pas la possibilité d'entrer sur mobile */}
        {/* <Button
                type="submit"
                mx="4"
                p="5"
                bg="white"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                position="relative"
                borderRadius="3xl"
            >
                Search
        </Button> */}

           
        </Box>
    );
}

export default SearchBar;

