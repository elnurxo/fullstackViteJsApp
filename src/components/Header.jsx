import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import profileImage from '../assets/pp.jpg'

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box style={{fontWeight:'bold',fontSize:'18px'}}>FullstackSPA PYP</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={profileImage}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={profileImage}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p><a style={{textDecoration:'underline', color:'blue'}} href='https://github.com/elnurxo'>elnurxo</a></p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem><Link to='/'>Home</Link></MenuItem>
                  <MenuItem><Link to='about'>About</Link></MenuItem>
                  <MenuItem><Link to='/users'>Users</Link></MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
