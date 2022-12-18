import styled from "styled-components"


export const StyledHeader = styled.header`
    width: 100%;
    background-color: var(--color-grey-4);
    position: fixed;
    top:0;
    z-index: 1;
    height: max-content;


    @media (max-width: 800px) {
       width: 100%;
       margin: 0;
       height: 8rem;
   }

`