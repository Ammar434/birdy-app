   {/* add on click items with a link component  */}
     <Link 
      as={RouterLink} 
      to={ROOT} 
      style={{ textDecoration: 'none' }} 
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="5"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'purple.200',
          color: 'white',
        }}
        >
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={MdHome}/>
          {Home}
        </Flex>
      </Link>