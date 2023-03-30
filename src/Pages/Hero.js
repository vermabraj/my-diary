import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import hero_background from "../assets/hero_background.JPG";
export default function Hero() {
  const navigate = useNavigate();
  const gotoDiary = () => {
    navigate("/diary");
  };
  
   const gotoGallery=()=>{
  navigate("/gallery");
   }
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={hero_background}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
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
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              onClick={gotoGallery}
            >
              GALLERY
            </Button>
            <Button
              bg={"pink.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
              onClick={gotoDiary}
            >
              DIARY
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
}
