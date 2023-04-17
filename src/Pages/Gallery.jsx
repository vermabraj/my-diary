import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useReducer } from "react";
import { addGallery, getGallery } from "../Redux/post.action";
import loading_loader from "../assets/loading_loader.gif";
import { toast } from "react-toastify";

const GalleryPhotos = () => {
  const { loading, error, data } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  const intitalState = {
    imageSrc: "",
    date: new Date().toString(),
  };
  const reducerFunction = (state, { type, payload }) => {
    switch (type) {
      case "img": {
        return {
          ...state,
          imageSrc: payload,
        };
      }

      default: {
        return state;
      }
    }
  };

  const [productState, setProductState] = useReducer(
    reducerFunction,
    intitalState
  );

  let reversedItem = data.map((el) => el).reverse();

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
      setProductState({ type: "img", payload: image_url });

      console.log(image_url);
    } catch (error) {
      console.log("error", error);
    }
  };

  window.addEventListener("load", () => {
    document.querySelector("#submit").disabled = true;
  });
  const addHandler = () => {
    if (JSON.stringify(productState) !== JSON.stringify(intitalState)) {
      dispatch(addGallery(productState)).then(() => {
        dispatch(getGallery());
        toast.success(" Your photo is added to gallery Successfully!", {
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

  useEffect(() => {
    dispatch(getGallery());
  }, []);

  if (loading)
    return (
      <>
        <img style={{ margin: "auto" }} src={loading_loader} alt="loader" />
      </>
    );
  if (error) return <h1>...Error</h1>;
  return (
    <Box id="gallery" margin={"auto"}>
      <Box textAlign={"center"} padding={"10px"} margin={"auto"}>
        <h1>
          Click to{" "}
          <span style={{ fontSize: "30px", color: "#C71585" }}>
            Add your Bautifull pic
          </span>{" "}
          to Gallery
        </h1>
        <Box mt={3} fontWeight="bold" margin={"auto"}>
          <label>
            Add Button will Enable in few secs, wait for link generation
          </label>

          <Flex justify={"center"} alignItems={"center"} minH={"100px"}>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              onChange={(event) => handleImage(event)}
              className="custom-file-input"
            />
            <Button
              id={"submit"}
              bg={"#C71585"}
              onClick={addHandler}
              _hover={{ bg: "#C71585" }}
            >
              Click to add
            </Button>
          </Flex>
          <Heading marginBottom="20px">My Gallery</Heading>
          <SimpleGrid
            columns={[2, 2, 3, 4]}
            gap={3}
            width={"90%"}
            margin={"auto"}
          >
            {reversedItem.map((item) => (
              <Flex key={item._id} justifyContent={"center"}>
                <img
                  src={item.imageSrc}
                  alt={item.date}
                 
                 
                />
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Grid marginBottom={"30px"} width={"90%"} margin={"auto"} gap={4}>
        <Flex justify={"center"} gap={4}>
          <Box width={"50%"}>
            <img
              src={
                "https://images.pexels.com/photos/2536576/pexels-photo-2536576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt="braj"
              width={"100%"}
            />
          </Box>
          <Box width={"50%"}>
            <img
              src={
                "https://images.pexels.com/photos/4214998/pexels-photo-4214998.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt="braj"
              width={"100%"}
            />
          </Box>
        </Flex>
        <Flex justify={"center"} gap={4} margin={"auto"}>
          <Box width={"27%"}>
            <img
              src={
                "https://images.pexels.com/photos/2379179/pexels-photo-2379179.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="braj"
              width={"110%"}
            />
          </Box>
          <Box width={"70%"}>
            <img
              src={
                "https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="braj"
              width={"100%"}
            />
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default GalleryPhotos;
