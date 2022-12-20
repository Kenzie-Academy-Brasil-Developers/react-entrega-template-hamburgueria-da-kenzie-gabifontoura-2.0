import styled from "styled-components";

export const StyledHomePage = styled.main`
  background-color: ${({ theme }) => theme.colors.colorBackGround};
  display: flex;
  flex-direction: column;
  border: none;
  min-height: 100vh;
  width: 100%;
 
`;
