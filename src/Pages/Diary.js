import { Box, Flex,Image } from '@chakra-ui/react'
import React from 'react'
import AddTodo from './AddTodo'

import DSC34 from "../assets/DSC34.jpg";

const Diary = () => {
  return (
    <Flex
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bg={"pink"}
      direction={["column", "column", "row"]}
    >
     
        <Image src={DSC34} width="40%" borderRadius={"10%"} />
        
      

      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <AddTodo />
      </Flex>
    </Flex>
  );
}

export default Diary
