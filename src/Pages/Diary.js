import { Box, Flex,Image } from '@chakra-ui/react'
import React from 'react'
import AddTodo from './AddTodo'



const Diary = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={["column", "column", "row"]}
      width={"90%"}
      margin={"auto"}
    >
      <Flex
        width={"50%"}
        marginTop={["20px", "0px", "0px"]}
        justify={"center"}
      >
        <Image src={"https://i.gifer.com/OWhc.gif"} width="70%" />
      </Flex>

      <Flex justifyContent={"center"} alignItems={"center"} width={"50%"}>
        <AddTodo />
      </Flex>
    </Flex>
  );
}

export default Diary
