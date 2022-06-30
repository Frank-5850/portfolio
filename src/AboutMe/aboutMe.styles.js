import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-bottom: 100px;
  @media (min-width: 1881px) {
    margin-bottom: 200px;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    margin: 25px 0;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50vh;
  width: 50vw;
  @media (min-width: 426px) and (max-width: 1024px) {
    width: 70vw;
    align-items: center;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 50vw;
  @media (min-width: 100px) and (max-width: 425px) {
    height: 100vh;
    width: 70vw;
  }
`;

export const SectionTitle = styled.h1`
  margin: 0 0 10px 0;
  @media (min-width: 1881px) {
    font-size: 50px;
  }
  @media (max-width: 320px) {
    margin: 0;
  }
`;

export const SectionText = styled.p`
  margin: 10px 0;
  @media (min-width: 1881px) {
    font-size: 25px;
  }
`;

export const SkillSection = styled.ul`
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  height: 20%;
  @media (max-width: 320px) {
    flex-flow: column;
  }
`;

export const Skills = styled.li`
  margin: 0;
  @media (min-width: 1881px) {
    font-size: 25px;
  }
`;

export const PhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  @media (min-width: 1881px) {
    width: 400px;
    height: 600px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    height: 300px;
    align-items: center;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    width: 100%;
    height: 300px;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 5px;
  @media (min-width: 1881px) {
    width: 400px;
    height: 600px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    width: 200px;
    height: 300px;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    width: 80vw;
  }
`;
