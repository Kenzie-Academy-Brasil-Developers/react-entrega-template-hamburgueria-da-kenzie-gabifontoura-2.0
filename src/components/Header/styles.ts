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
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    
   }


   .lupa{
    
    color: var(--color-grey-1);
    width: max-content;
    height: 2.25rem;
    background-color: var(--color-brand-1);
    padding: 0.65rem ;
    border-radius: var(--radius-2);
    position: absolute;
    margin: 0.5rem 0 0 12.5rem;;

   }

   .search{
    width: max-content;
   }

   .cart{
    color: var(--color-grey-1);
    width: 3.5rem;
    height: max-content;
    padding: 1rem;
    cursor: pointer;
   }

   .exit{
    color: var(--color-grey-1);
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
   }

   .darkmode{
    color: var(--color-grey-1);
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
   }

   .countItens{
    background-color: var(--color-brand-1);
    width:  max-content;
    height: 1.25rem;
    padding: 0.125rem 0.3rem;
    color: var(--color-text);
    font-size: 0.7rem;
    border-radius: var(--radius-2);
    align-items: center;
    position: absolute;
    top:1.2rem;
    
   }
`