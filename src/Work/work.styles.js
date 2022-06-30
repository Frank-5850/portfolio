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
  flex-direction: column;
  height: 50vh;
  width: 50vw;
  @media (min-width: 426px) and (max-width: 1024px) {
    width: 90vw;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    width: 100vw;
  }
`;
