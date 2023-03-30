import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deletePosts, getPosts } from "../Redux/post.action";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,

} from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";

export default function TodoItem() {
  const { loading, error, data } = useSelector((store) => store.post);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, []);

    if (loading) return <h1>..Loading</h1>;
    if (error) return <h1>..Error</h1>;
  return (
    <Container maxW={"7xl"}>
      {data.map((post) => (
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10, lg: 5 }}
          py={{ base: 20, md: 22 }}
          direction={{ base: "column", md: "row" }}
          key={post._id}
          border={"3px solid pink"}
          borderRadius={"10px"}
          padding={"5vh"}
          margin={"5vh"}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "pink",
                  zIndex: -1,
                }}
              >
                {post.title}
              </Text>

              <br />
            </Heading>

            <Text color={"gray.500"} minH="5vh" minW={"70%"}>
              {post.description}
            </Text>
            <Text
              color={"gray.500"}
              fontSize={{ base: "xl", sm: "xl", lg: "md" }}
            >
              <strong>Written on :- </strong>
              {post.date}
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                bg={"pink.300"}
                _hover={{ bg: "gray.300" }}
                rightIcon={<FcLike />}
              >
                Like
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"200px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                h={"150%"}
                src={post.img}
                borderRadius={2}
              />
            </Box>
          </Flex>
        </Stack>
      ))}
    </Container>
  );
}



export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="pink"
      />
    </Icon>
  );
};