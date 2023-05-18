import React, { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deletePosts, getPosts, updatePost } from "../Redux/post.action";
import { BsCalendar2Date } from "react-icons/bs";

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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import loading_loader from "../assets/loading_loader.gif";
import { toast } from "react-toastify";
import EditModal from "../Components/EditModal";

const initialState = {
  title: "",
  description: "",
};
const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "title": {
      return {
        ...state,
        title: payload,
      };
    }
    case "description": {
      return {
        ...state,
        description: payload,
      };
    }

    default: {
      return state;
    }
  }
};

const TodoItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, data } = useSelector((store) => store.post);
  const [productState, setProductState] = useReducer(
    reducerFunction,
    initialState
  );
  const [id,setId] = useState("")
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePosts(id));
  };





  let reversedItem = data.map((el) => el).reverse();
  if (loading)
    return (
      <Flex justify={"center"}>
        <img src={loading_loader} alt={"loader"} />
      </Flex>
    );
  if (error) return <h1>...Error</h1>;
  return (
    <Container maxW={"-moz-max-content"} fontStyle={"italic"}>
     
      {reversedItem.map((post) => (
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10, lg: 5 }}
          py={{ base: 20, md: 22 }}
          direction={{ base: "column", md: "row" }}
          key={post._id}
          border={"3px solid yellow"}
          borderRadius={"10px"}
          padding={"5vh"}
          margin={"5vh"}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "md", sm: "2xl", md: "3xl", lg: "5xl" }}
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

            <Text
              color={"gray.500"}
              minH="5vh"
              minW={"70%"}
              fontSize={{ base: "sm", sm: "lg", md: "xl", lg: "2xl" }}
            >
              {post.description}
            </Text>
            <Text
              color={"gray.500"}
              fontSize={{ base: "small", sm: "sm", lg: "lg" }}
              maxW={["155px", "170px", "170px", "220px"]}
              overflow="hidden"
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
            >
              {post.date}
            </Text>
            <Flex align={"center"} justify={"space-between"}>
              <Button
                _hover={{ color: "red", paddingBottom: "5px" }}
                margin={"10px"}
                colorScheme={"none"}
                color={"black"}
                onClick={() => handleDelete(post._id)}
                variant={"none"}
              >
                <RiDeleteBin6Line size={"25px"} />
              </Button>
             
              <EditModal item={post}/>
            </Flex>
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
              height={"100%"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                h={"150px"}
                src={post.imageSrc}
                borderRadius={2}
              />
            </Box>
          </Flex>
        </Stack>
      ))}
    </Container>
  );
};

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

export default TodoItem;
