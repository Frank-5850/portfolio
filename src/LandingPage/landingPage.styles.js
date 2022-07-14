import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Greeting = styled.h3`
  margin: 0 50px;
  @media (min-width: 1500px) {
    font-size: 1.5em;
  }
`;

export const HeaderText = styled.h1`
  font-size: 3em;
  margin: 0 50px;
  @media (min-width: 1500px) {
    font-size: 4em;
  }
`;

export const Skills = styled.h4`
  margin: 10px 50px;
  @media (min-width: 1500px) {
    font-size: 2em;
  }
`;
