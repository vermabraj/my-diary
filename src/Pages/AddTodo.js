import { Button, Flex, Heading, Input, Box ,Textarea} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { addProducts, getPosts } from "../Redux/post.action";

const intitalState = {
  img: "",
  title: "",
  description: "",
  date: new Date().toString(),
};
const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "img": {
      return {
        ...state,
        img: payload,
      };
    }
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

const AddTodo = () => {
  const dispatch = useDispatch();

  const [productState, setProductState] = useReducer(
    reducerFunction,
    intitalState
  );

  const addHandler = () => {
   
    if (JSON.stringify(productState) !== JSON.stringify(intitalState)) {
      dispatch(addProducts(productState)).then(() => {
        dispatch(getPosts())
       toast.success(" Your thought is added Successfully!", {
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
       });
      } 
      );
    }
   
  }; 


  return (
    <Box>
      <Box
        m="auto"
        mt={5}
        mb={12}
        border={"1px solid silver"}
        padding="10px"
       
        borderRadius={"10px"}
      >
        <Heading textAlign={"center"}>Your today's feeling</Heading>
        <Box mt={8}>
          <Box mt={4} fontWeight="bold">
            <label>Today's Title</label>
            <br />
            <Input
              w={"100%"}
              type="text"
              value={productState.title}
              onChange={(e) =>
                setProductState({ type: "title", payload: e.target.value })
              }
              placeholder="Title of your feeling...."
              required
            />
          </Box>
          <Box mt={4} fontWeight="bold">
            <label>Pic of the day</label>
            <br />
            <Input
              w={"100%"}
              type="url"
              value={productState.img}
              onChange={(e) =>
                setProductState({ type: "img", payload: e.target.value })
              }
              placeholder="Your beautifull pic of the day.."
              required
            />
          </Box>

          <Box mt={4} fontWeight="bold">
            <label>Describe your thought</label>
            <br />
            <textarea
              placeholder="write your feeling for today..."
              rows="6"
              cols="40"
              type="text"
              value={productState.description}
              onChange={(e) =>
                setProductState({
                  type: "description",
                  payload: e.target.value,
                })
              }
              style={{
                backgroundColor: "pink",
                border: "1px solid silver",
                borderRadius: "5px",
                padding: "10px",
              }}
              required
            />
          </Box>

          <Box>
            <Button
              colorScheme={"pink"}
              w={"100%"}
              mt={8}
              onClick={addHandler}
              _hover={{ bg: "blue.300" }}
            >
              Save your thought
            </Button>
          </Box>
        </Box>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
};

export default AddTodo;
