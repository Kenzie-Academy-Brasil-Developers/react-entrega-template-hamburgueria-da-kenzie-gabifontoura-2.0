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


   .nav{
    width: max-content;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    
   }


   .lupa{
    
    color: var(--color-grey-1);
    width: 1.5rem;
    height: 1.5rem;

   }

   .search{
    width: max-content;
   }

   .cartIcon{
    color: var(--color-grey-1);
    width: 1.5rem;
    height: 1.5rem;
   }

   .exit{
    color: var(--color-grey-1);
    width: 1.5rem;
    height: 1.5rem;
   }
`