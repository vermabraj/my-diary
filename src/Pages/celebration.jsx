import React from "react";
import "./Celebration.css";
import ReactAudioPlayer from "react-audio-player";
import Happy_Birthday from "../assets/Happy_Birthday.m4a";
import { Box, Heading } from "@chakra-ui/react";

const Celebration = () => {
  return (
    <Box
      id="body"
      w={"full"}
      h={"100vh"}
      backgroundImage={"#"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      
    >
      <ReactAudioPlayer src={Happy_Birthday} autoPlay />
      <h1>
        <span style={{ color: "red", fontWeight: "bolder",fontSize:"larger" }}>
          HAPPY BIRTHDAY
        </span>
        <span style={{ fontStyle: "italic",color:"white" }}>MERI JAAN</span>
      </h1>
      <div class="fireworks">
        <div class="firework">
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
        </div>
        <div class="firework" style={{ "margin-top": "-70px" }}>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
        </div>
        <div class="firework">
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
        </div>
        <div class="firework" style={{ "margin-top": "70px" }}>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
        </div>
        <div class="firework">
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
        </div>
        <div class="firework" style={{ "margin-top": "-70px" }}>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
          <div class="explosion">
            <div class="spark silver"></div>
          </div>
        </div>
        <div class="firework">
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
          <div class="explosion">
            <div class="spark gold"></div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Celebration;
