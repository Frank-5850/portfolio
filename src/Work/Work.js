import React from "react";
import { WorkContainer, WorkWrapper } from "./work.styles";
import weatherApp from "../assets/Weather.jpg";

const Work = () => {
  return (
    <WorkWrapper>
      <WorkContainer>
        <img src={weatherApp} alt="" />
      </WorkContainer>
    </WorkWrapper>
  );
};

export default Work;
