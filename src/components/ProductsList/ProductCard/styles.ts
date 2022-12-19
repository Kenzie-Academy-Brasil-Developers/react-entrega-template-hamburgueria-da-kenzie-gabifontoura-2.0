import styled from "styled-components";

export const StyledProductCard = styled.li`    
   
    background: var(--color-grey-4);
    border: 2px solid var(--color-grey-2);
    border-radius: var(--radius-2);
    &:hover {
    filter: brightness(1.2);
    border: 2px solid  var(--color-brand-1);
   
  }
    
    .content{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 1rem;
        width: 13rem;

    }
    img{
        width: 100%;
        height: 180px;
        object-fit: cover;
        background-color:  var(--color-background);
    }
  
    
`