import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DSC34 from "../assets/DSC34.jpg";
export default function Hero() {
  const navigate = useNavigate();
  const gotoDiary = () => {
    navigate("/diary");
  };
  
   const gotoGallery=()=>{
  navigate("/gallery");
   }

    const Celebrate = () => {
      navigate("/celebrations");
    };

  return (
    <Flex
      w={"100vw"}
      h={"90vh"}
      backgroundImage={DSC34}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.700, transparent)"}
      >
        <Flex direction={"column"}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl", md: "2xl", lg: "3xl" })}
            margin="10px"
          >
            “I <span style={{ color: "yellow" }}>looked</span> at you in a{" "}
            <span style={{ color: "yellow" }}>million</span> ways,
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl", md: "2xl", lg: "3xl" })}
            margin="10px"
          >
            and I <span style={{ color: "yellow" }}>loved you</span> in each.”
          </Text>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            margin="10px"
          >
            <Button
              width={"100px"}
              rounded={"full"}
              color={"white"}
              bg={{ bg: "blue.500" }}
              onClick={gotoGallery}
              border={"3px solid yellow"}
              _hover={{ bg: "yellow", color: "black" }}
            >
              GALLERY
            </Button>
            <Button
              width={"100px"}
              rounded={"full"}
              color={"white"}
              bg={{ bg: "whiteAlpha.500" }}
              onClick={gotoDiary}
              border={"3px solid yellow"}
              _hover={{ bg: "yellow", color: "black" }}
            >
              DIARY
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
}
