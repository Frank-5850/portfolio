import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  @media (min-width: 100px) and (max-width: 425px) {
    min-height: 80vh;
  }
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 75vh;
  width: 66vw;
  // border: 1px solid red;
  @media (min-width: 426px) and (max-width: 1024px) {
    width: 90vw;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    width: 100vw;
  }
`;

export const WorkCard = styled.div`
  display: flex;
  flex-flow: row;
  // height: 25%;
  width: 100%;
  // border: 1px solid blue;
`;

export const WorkImg = styled.img`
  width: 30%;
`;

export const WorkInfo = styled.div`
  padding-left: 10px;
  width: 70%;
`;

export const WorkTitle = styled.h2`
  margin: 0;
  padding: 0;
  margin: 0 0 5px 0;
`;

export const WorkDetails = styled.p`
  margin: 0;
  padding: 0;
  margin: 0 0 5px 0;
`;

export const LanguageAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  height: 50%;
`;

export const LanguageList = styled.ul`
  display: flex;
  flex-flow: column;
`;

export const Language = styled.li``;

export const WorkLinkContainer = styled.div`
  display: flex;
  // flex-direction: row;
  // justify-content: flex-end;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;

export const WorkLink = styled.a`
  text-decoration: none;
  margin: 0 5px;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;

export const GitHubIcon = styled(FaGithubSquare)`
  color: white;
  font-size: 1.5em;
  margin: 0 5px;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;

export const WebsiteIcon = styled(MdOpenInNew)`
  color: white;
  font-size: 1.5em;
  margin: 0 5px;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;
