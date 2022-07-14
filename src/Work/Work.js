import React from "react";
import {
  IconLinkBox,
  Language,
  LanguageAndLinks,
  LanguageList,
  WorkCard,
  WorkContainer,
  WorkDetails,
  WorkImg,
  WorkInfo,
  WorkTitle,
  WorkWrapper,
} from "./work.styles";
import weatherApp from "../assets/Weather.jpg";
import eastBay from "../assets/EastBay.jpg";
import { FaGithubSquare, FaWindowMaximize } from "react-icons/fa";
import { IconLink } from "../Socials/socials.styles";

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
              <IconLinkBox>
                <IconLink
                  href="https://github.com/Frank-5850/weather-react"
                  target="_blank"
                >
                  <FaGithubSquare size="1.5em" />
                </IconLink>
                <IconLink
                  href="https://glassmorphic-weather.herokuapp.com/home"
                  target="_blank"
                >
                  <FaWindowMaximize size="1.5em" />
                </IconLink>
              </IconLinkBox>
            </LanguageAndLinks>
          </WorkInfo>
        </WorkCard>
        <WorkCard>
          <WorkImg src={eastBay} alt="EBR app photo" />
          <WorkInfo>
            <WorkTitle>East Bay Recorders</WorkTitle>
            <WorkDetails>
              East Bay Recorders is an intimate, vibey studio where real music
              gets made. I had the pleasure to modernize the front-end with
              Andrew Spivey.
            </WorkDetails>
            <LanguageAndLinks>
              <LanguageList>
                <Language>react</Language>
                <Language>node</Language>
                <Language>styled-components</Language>
                <Language>Material UI</Language>
                <Language>react-router-dom</Language>
              </LanguageList>
              <IconLinkBox>
                <IconLink
                  href="https://github.com/andrewjspivey/eastbay_recorders"
                  target="_blank"
                >
                  <FaGithubSquare size="1.5em" />
                </IconLink>
                <IconLink href="eastbayrecorders.com" target="_blank">
                  <FaWindowMaximize size="1.5em" />
                </IconLink>
              </IconLinkBox>
            </LanguageAndLinks>
          </WorkInfo>
        </WorkCard>
      </WorkContainer>
    </WorkWrapper>
  );
};

export default Work;
