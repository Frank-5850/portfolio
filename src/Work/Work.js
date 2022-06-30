import React from "react";
import {
  GitHubIcon,
  IconLinkBox,
  Language,
  LanguageAndLinks,
  LanguageList,
  WebsiteIcon,
  WorkCard,
  WorkContainer,
  WorkDetails,
  WorkImg,
  WorkInfo,
  WorkLink,
  WorkLinkContainer,
  WorkTitle,
  WorkWrapper,
} from "./work.styles";
import weatherApp from "../assets/Weather.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { IconBox, IconLink } from "../Socials/socials.styles";

const Work = () => {
  return (
    <WorkWrapper>
      <WorkContainer>
        <WorkCard>
          <WorkImg src={weatherApp} alt="Weather app photo" />
          <WorkInfo>
            <WorkTitle>Weather app</WorkTitle>
            <WorkDetails>
              Simple weather application build using the Open-Weather API. Users
              are able to get the weather, 24 hour forecast and 7 day forecast
              for their current location or search a location.
            </WorkDetails>
            <LanguageAndLinks>
              <LanguageList>
                <Language>react</Language>
                <Language>node</Language>
                <Language>express</Language>
                <Language>styled-components</Language>
                <Language>open weather map API</Language>
              </LanguageList>
            </LanguageAndLinks>
          </WorkInfo>
        </WorkCard>
      </WorkContainer>
    </WorkWrapper>
  );
};

export default Work;
