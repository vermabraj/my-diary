import React, { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
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
import { getPosts, updatePost } from "../Redux/post.action";
import { BiEdit } from "react-icons/bi";

const EditModal = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  const [data, setData] = React.useState({
    _id: item._id,
    title: item.title,
    description: item.description,
  });

  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  

  return (
    <div>
      <Button variant={"unstyled"} onClick={onOpen} >
        <BiEdit size={"25px"} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textDecoration={"underline"} color={"yellow.600"}>
            Update your feelings
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isError}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                placeholder="Enter your updated title..."
                required
              />
              {!isError ? (
                <FormHelperText>
                  Enter the title you'd like to update the diary on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Title is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                isInvalid
                placeholder="Enter the description you'd like to update.."
                value={data.name}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="yellow"
              mr={3}
              onClick={() => {
                dispatch(updatePost(item._id, data));
                onClose();
              }}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditModal;
