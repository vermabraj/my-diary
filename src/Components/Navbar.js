import { ReactNode } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import braj_diary from "../assets/braj_diary.JPG";
import pratigya_diary from "../assets/pratigya_diary.JPG";
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

const Links = ["Dashboard", "Projects", "Team"];

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
  let name = localStorage.getItem("name") || "";

  return (
    <>
      <Box
        bg={useColorModeValue("pink.300", "gray.700")}
        px={4}
        position="fixed"
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
            <Link href="/">
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
            </HStack>
          </HStack>
          <Flex alignItems={"center"} justify={"space-around"}>
            <Button onClick={toggleColorMode} colorScheme="none">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
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
                    name === "bm"
                      ? braj_diary
                      : "" || name === "pratigya"
                      ? pratigya_diary
                      : ""
                  }
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={
                      name === "bm"
                        ? braj_diary
                        : "" || name === "pratigya"
                        ? braj_diary
                        : ""
                    }
                  />
                </Center>
                <br />
                <Center>
                  {authState.isAuth ? (
                    <Text fontWeight={"semibold"} mt={4} fontSize={"18px"}>
                      Welcome {name}
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
