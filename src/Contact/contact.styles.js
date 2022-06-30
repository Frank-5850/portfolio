import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-bottom: 50px;
  @media (min-width: 100px) and (max-width: 375px) {
    height: 60vh;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  @media (min-width: 100px) and (max-width: 375px) {
    width: 100vw;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  @media (min-width: 1881px) {
    font-size: 25px;
  }
`;

export const ContactMessage = styled.p`
  margin: 0 0 10px 0;
  @media (min-width: 1881px) {
    margin: 0 0 20px 0;
    font-size: 25px;
  }
`;
