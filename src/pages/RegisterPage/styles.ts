import styled from "styled-components";

export const StyledRegisterPage = styled.main`
  background-color: ${({theme}) => theme.colors.colorBackGround};
  display: flex;
  flex-direction: column;
  border: none;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 2rem;
`;
