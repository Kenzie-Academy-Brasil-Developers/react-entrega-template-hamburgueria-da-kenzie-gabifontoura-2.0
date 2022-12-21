import styled from "styled-components";

export const StyledCartCard = styled.li`
  background:${({theme}) => theme.colors.colorGrey1};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  


  &:hover {
    filter: brightness(1.2);
  }

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    background-color: ${({theme}) => theme.colors.colorBackGround};
  }


  .counter{
    
    border-radius: var(--radius-1);
    padding: 0.25rem;
  }

  .trashIcon{
    color: ${({theme}) => theme.colors.colorGrey3};
  }
`;


