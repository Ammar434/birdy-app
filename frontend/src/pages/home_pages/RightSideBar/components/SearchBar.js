import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";    


const SearchBar = () => {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

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
                value={search}
                onChange={handleChange}
                bg="white"
                alignItems="center"
                borderRadius="3xl"
                _hover=
                {{
                    bg: "white",
                    color: "purple", 
                    borderColor: "purple.100",
                }}
                />    

        </InputGroup>            
           
        </Box>
    );
}

export default SearchBar;

