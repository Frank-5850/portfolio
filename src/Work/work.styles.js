import styled from "styled-components";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 100vh;
  width: 100vw;
  @media (min-width: 100px) and (max-width: 425px) {
    min-height: 80vh;
  }
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 66vw;
  align-items: center;
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
  // align-items: center;
  // height: 25%;
  width: 80%;
  // border: 1px solid blue;
  margin-bottom: 30px;
  @media (min-width: 1881px) {
    margin-bottom: 75px;
  }
`;

export const WorkImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  @media (min-width: 1881px) {
    width: 40%;
    height: 100%;
  }
`;

export const WorkInfo = styled.div`
  padding-left: 10px;
  width: 70%;
  @media (min-width: 1881px) {
    padding-left: 40px;
  }
`;

export const WorkTitle = styled.h2`
  margin: 0;
  padding: 0;
  margin: 0 0 5px 0;
  @media (min-width: 1881px) {
    font-size: 50px;
  }
`;

export const WorkDetails = styled.p`
  margin: 0;
  padding: 0;
  margin: 0 0 5px 0;
  @media (min-width: 1881px) {
    font-size: 20px;
  }
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

export const Language = styled.li`
  @media (min-width: 1881px) {
    font-size: 22px;
  }
`;

export const IconLinkBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
