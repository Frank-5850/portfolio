import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  @media (min-width: 1500px) {
    width: 60%;
  }
`;

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

export const SectionTitle = styled.h1`
  margin: 0 0 10px 0;
`;

export const SectionText = styled.p`
  margin: 10px 0;
`;

export const SkillSection = styled.ul`
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  height: 20%;
`;

export const Skills = styled.li`
  margin: 0;
`;

export const PhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
`;

export const Photo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 5px;
`;
