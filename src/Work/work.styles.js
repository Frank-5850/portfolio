import styled from "styled-components";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 75%;
  @media (min-width: 1500px) {
    width: 60%;
  }
`;

export const WorkCard = styled.div`
  display: flex;
  flex-flow: row;
  margin: 30px 0;
`;

export const WorkImg = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
  border-radius: 5px;
  @media (min-width: 1500px) {
    width: 500px;
    height: 300px;
  }
`;

export const WorkInfo = styled.div`
  padding-left: 10px;
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
