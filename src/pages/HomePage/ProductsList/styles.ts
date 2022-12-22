import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 8rem 0;
  min-height: 100vh;
  height: max-content;

  @media (max-width: 1100px) {
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    overflow-x: auto;
    gap: 1rem;
    padding: 1rem;
    min-height: 80vh;
  }
`;
