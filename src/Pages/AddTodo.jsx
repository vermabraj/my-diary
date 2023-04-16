import { Button, Flex, Heading, Input, Box, Text } from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProducts, getPosts } from "../Redux/post.action";

const initialState = {
  imageSrc: "",
  title: "",
  description: "",
  date: new Date().toString(),
 
};
const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "image": {
      return {
        ...state,
        imageSrc: payload,
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
    initialState
  );

  window.addEventListener("load", () => {
    document.querySelector("#submit").disabled = true;
  });
  const addHandler = () => {
    if (JSON.stringify(productState) !== JSON.stringify(initialState)) {
      dispatch(addProducts(productState)).then(() => {
        dispatch(getPosts());
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
      });
    }
  };

  var image_url;
  const handleImage = async (e) => {
   e.preventDefault();
    try {
      let image = document.getElementById("image");
      let actual_image = image.files[0];
      let form = new FormData();

      form.append("image", actual_image);
      let res = await fetch(
        `https://api.imgbb.com/1/upload?key=c8ae0e28f0a4d5c6dbada81345770a8a`,
        {
          method: "POST",
          body: form,
        }
      );
      let data = await res.json();
      //store image url in global variable
      image_url = data.data.display_url;
      document.querySelector("#submit").disabled = false;
      setProductState({ type: "image", payload: image_url });
      console.log(image_url);
    } catch (error) {
      console.log("error", error);
    }
  };

 

  return (
    <Box mt={5}>
      <Box
        m="auto"
        mt={3}
        mb={15}
        border={"1px solid black"}
        padding="10px"
        borderRadius={"10px"}
        width={["80vw", "80vw", "50vw"]}
      >
        <Heading textAlign={"center"}>Your today's feeling</Heading>
        <Text align={"center"} color={"grey"}>
          First upload image then write{" "}
        </Text>
        <Box>
          <Box mt={3} fontWeight="bold">
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
              bg={"white"}
              required
            />
          </Box>

          <Box mt={3} fontWeight="bold">
            <label>Describe your thought</label>
            <br />
            <textarea
              placeholder="write your feeling for today..."
              rows="4"
              cols="25"
              type="text"
              value={productState.description}
              onChange={(e) =>
                setProductState({
                  type: "description",
                  payload: e.target.value,
                })
              }
              style={{
                border: "1px solid silver",
                borderRadius: "5px",
                padding: "10px",
              }}
              minLength="6"
              required
            />
          </Box>
          <Box mt={3} fontWeight="bold">
            <label>Add your Beautifull photo</label>
            <br />
            <input
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              onChange={(event) => handleImage(event)}
              className="custom-file-input"
            />
          </Box>
          <Box>
            <Button
              id={"submit"}
             
              w={"100%"}
              mt={5}
              onClick={addHandler}
              _hover={{ bg: "pink.400" }}
              bgGradient={[
                "linear(to-tr, teal.400, yellow.500)",
                "linear(to-t, yellow.500, teal.500)",
                "linear(to-b, orange.200, purple.500)",
              ]}
            >
              Submit
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
