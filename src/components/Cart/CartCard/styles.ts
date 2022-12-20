import styled from "styled-components";

export const StyledCartCard = styled.li`
  background:${({theme}) => theme.colors.colorGrey1};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  
  button{
    color: var(--color-grey-1);

  }

  &:hover {
    filter: brightness(1.2);
  }

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    background-color: ${({theme}) => theme.colors.colorBackGround};
  }

  button:hover {
    text-decoration: underline;
  }

  .counter{
    background-color: ${({theme}) => theme.colors.colorBackGround};
    border-radius: var(--radius-1);
    padding: 0.25rem;
  }
`;


