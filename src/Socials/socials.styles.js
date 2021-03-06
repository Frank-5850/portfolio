import styled from "styled-components";

export const SocialsWrapper = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
`;

export const SocialsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 275px;
    margin: 0px auto;
    background-color: white;
  }
`;

export const IconBox = styled.li`
  padding: 5px;
`;

export const IconLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  &:hover {
    color: #f5f5f5;
  }
`;
