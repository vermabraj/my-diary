import DSC1 from "../assets/Gallery/DSC1.JPG";
import DSC2 from "../assets/Gallery/DSC2.JPG";
import DSC3 from "../assets/Gallery/DSC3.JPG";
import DSC4 from "../assets/Gallery/DSC4.JPG";
import DSC5 from "../assets/Gallery/DSC5.JPG";
import DSC6 from "../assets/Gallery/DSC6.JPG";
import DSC7 from "../assets/Gallery/DSC7.JPG";
import DSC8 from "../assets/Gallery/DSC8.JPG";
import DSC9 from "../assets/Gallery/DSC9.JPG";
import DSC10 from "../assets/Gallery/DSC10.JPG";
import DSC11 from "../assets/Gallery/DSC11.JPG";
import DSC12 from "../assets/Gallery/DSC12.JPG";

import DSC16 from "../assets/Gallery/DSC16.JPG";
import DSC17 from "../assets/Gallery/DSC17.JPG";
import DSC18 from "../assets/Gallery/DSC18.JPG";

import DSC21 from "../assets/Gallery/DSC21.JPG";

import DSC24 from "../assets/Gallery/DSC24.JPG";

import DSC26 from "../assets/Gallery/DSC26.JPG";
import DSC27 from "../assets/Gallery/DSC27.JPG";
import DSC28 from "../assets/Gallery/DSC28.JPG";
import DSC29 from "../assets/Gallery/DSC29.JPG";
import DSC30 from "../assets/Gallery/DSC30.JPG";
import DSC31 from "../assets/Gallery/DSC31.JPG";
import DSC32 from "../assets/Gallery/DSC32.JPG";
import DSC33 from "../assets/Gallery/DSC33.JPG";
import DSC34 from "../assets/Gallery/DSC34.JPG";
import DSC35 from "../assets/Gallery/DSC35.JPG";
import DSC36 from "../assets/Gallery/DSC36.JPG";
import DSC37 from "../assets/Gallery/DSC37.JPG";
import DSC38 from "../assets/Gallery/DSC38.JPG";
import DSC39 from "../assets/Gallery/DSC39.JPG";
import DSC40 from "../assets/Gallery/DSC40.JPG";
import DSC41 from "../assets/Gallery/DSC41.JPG";
import DSC42 from "../assets/Gallery/DSC42.JPG";
import DSC52 from "../assets/Gallery/DSC52.JPG";
import DSC53 from "../assets/Gallery/DSC53.JPG";

import DSC55 from "../assets/Gallery/DSC55.JPG";
import DSC56 from "../assets/Gallery/DSC56.JPG";
import DSC57 from "../assets/Gallery/DSC57.JPG";
import DSC58 from "../assets/Gallery/DSC58.JPG";

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

const GalleryPhotos = () => {
  return (
    <div style={{backgroundColor:"pink"}}>
      <div
        
        id="galleryGrid"
      >
        <img src={DSC1} alt="braj" height="300px" />

        <img src={DSC2} alt="braj" height="300px" />
        <img src={DSC3} alt="braj" height="300px" />
        <img src={DSC17} alt="braj" />
        <Flex direction={"column"} justify="space-around">
          <img src={DSC11} alt="braj" />
          <img src={DSC16} alt="braj" />
        </Flex>
        <Flex direction={"column"} justify="space-around">
          <img src={DSC7} alt="braj" height="300px" />
          <img src={DSC4} alt="braj" height="300px" />
        </Flex>

        <img src={DSC5} alt="braj" height="300px" />
        <img src={DSC6} alt="braj" height="300px" />

        <img src={DSC8} alt="braj" height="300px" />
        <Flex direction={"column"} justify="space-around">
          <img src={DSC9} alt="braj" height="300px" />
          <img src={DSC10} alt="braj" height="300px" />
        </Flex>
        <img src={DSC12} alt="braj" />

        <Flex direction={"column"} justify="space-around">
          <img src={DSC18} alt="braj" />
          <img src={DSC27} alt="braj" />
        </Flex>

        <img src={DSC21} alt="braj" />

        <img src={DSC26} alt="braj" />
        <img src={DSC28} alt="braj" />
        <img src={DSC29} alt="braj" />
        <img src={DSC30} alt="braj" />
        <img src={DSC31} alt="braj" />
        <img src={DSC32} alt="braj" />
        <img src={DSC33} alt="braj" />

        <img src={DSC35} alt="braj" />
        <Flex direction={"column"} justify="space-around">
          <img src={DSC41} alt="braj" />
          <img src={DSC34} alt="braj" />
        </Flex>
        <img src={DSC36} alt="braj" />

        <img src={DSC38} alt="braj" />
        <img src={DSC39} alt="braj" />
        <img src={DSC40} alt="braj" />

        <img src={DSC24} alt="braj" />
        <img src={DSC42} alt="braj" />
        <img src={DSC52} alt="braj" />
        <img src={DSC53} alt="braj" />

        <img src={DSC55} alt="braj" />
        <img src={DSC56} alt="braj" />
        <img src={DSC57} alt="braj" />
        <img src={DSC58} alt="braj" />
        <Flex direction={"column"} justify="space-around">
          <img src={DSC37} alt="braj" width="100%" />
        </Flex>
      </div>
    </div>
  );
};

export default GalleryPhotos;
