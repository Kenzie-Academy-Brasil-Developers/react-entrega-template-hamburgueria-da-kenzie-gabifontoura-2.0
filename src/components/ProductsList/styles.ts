import styled from "styled-components";

export const StyledProductsList = styled.ul`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 2rem;
  margin: 6rem 0;
  
   @media (max-width: 1100px) {
        display: flex;
        grid-template-columns: repeat(2, 1fr);
        flex-direction: row;
        overflow-x: auto;
        width: 100%;
        margin: 5rem 0 0 1rem;
        gap:1rem
   }

`;