import styled from "styled-components";

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
  align-items: center;
  // height: 25%;
  width: 80%;
  // border: 1px solid blue;
  margin-bottom: 30px;
`;

export const WorkImg = styled.img`
  width: 30%;
  height: 100%;
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

export const IconLinkBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
