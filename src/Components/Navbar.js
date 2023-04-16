import { ReactNode } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useBreakpointValue,
  Text,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";



const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"/"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const { authState, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const gotoDiary = () => {
    navigate("/diary");
  };
  const gotoNote = () => {
    navigate("/note");
  };
  const gotoGallery = () => {
    navigate("/gallery");
  };
   setInterval(() => {
     let date = new Date();
     let clock = document.getElementById("clock");
     clock.innerHTML =
       date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
   }, 1000);
  let name = localStorage.getItem("name") || "";
  let avatar_url = localStorage.getItem("avatar_url") || "";
  return (
    <>
      <Box
        bgGradient={[
          "linear(to-tr, teal.400, yellow.500)",
          "linear(to-t, yellow.500, teal.500)",
          "linear(to-b, orange.200, purple.500)",
        ]}
        px={4}
        width="100%"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            colorScheme="none"
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({
                  base: "xl",
                  md: "2xl",
                  lg: "3xl",
                })}
                margin="10px"
              >
                My Diary
              </Text>
            </Link>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Button
                colorScheme="none"
                rounded={"full"}
                onClick={gotoNote}
                className="hover-1"
              >
                WRITE A NOTE
              </Button>
              <Button
                colorScheme="none"
                rounded={"full"}
                className="hover-1"
                onClick={gotoGallery}
              >
                GALLERY
              </Button>
              <Button
                colorScheme="none"
                rounded={"full"}
                className="hover-1"
                onClick={gotoDiary}
              >
                My Diary
              </Button>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} justify={"space-around"}>
            <strong>
              <Box
                id="clock"
                color="white"
                fontSize={"2xl"}
                border={"2px solid white"}
                padding={"0px 10px 0px 10px"}
                borderRadius={"5px"}
                marginRight={"20px"}
              ></Box>
            </strong>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    authState.isAuth
                      ? "https://avatars.dicebear.com/api/male/username.svg"
                      : "https://icon-library.com/images/icon-login/icon-login-12.jpg"
                  }
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={
                      authState.isAuth
                        ? "https://avatars.dicebear.com/api/male/username.svg"
                        : "https://icon-library.com/images/icon-login/icon-login-12.jpg"
                    }
                  />
                </Center>
                <br />
                <Center>
                  {authState.isAuth ? (
                    <Text fontWeight={"semibold"} mt={4} fontSize={"18px"}>
                      {name}
                    </Text>
                  ) : (
                    <Text fontWeight={"semibold"} mt={4}>
                      Welcome
                    </Text>
                  )}
                </Center>
                <br />
                <MenuDivider />
                <Link to="/diary">
                  <MenuItem>Your Diary</MenuItem>
                </Link>
                <Link to="/gallery">
                  <MenuItem>Your Gallery</MenuItem>
                </Link>

                <MenuItem>
                  {authState.isAuth ? (
                    <Text onClick={logoutUser}>LOG OUT</Text>
                  ) : (
                    <Link to="/login">
                      {" "}
                      <Text>SIGNUP / LOGIN</Text>
                    </Link>
                  )}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Button
                colorScheme="none"
                rounded={"full"}
                onClick={gotoNote}
                _hover={{ color: "blue.500" }}
              >
                NOTE
              </Button>
              <Button
                colorScheme="none"
                rounded={"full"}
                _hover={{ color: "blue.500" }}
                onClick={gotoGallery}
              >
                GALLERY
              </Button>
              <Button
                colorScheme="none"
                rounded={"full"}
                _hover={{ color: "blue.500" }}
                onClick={gotoDiary}
              >
                My Diary
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
