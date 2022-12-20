import styled from "styled-components";

export const StyledCartCard = styled.li`
  background:var(--color-grey-4);
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
    background-color: var(--color-background);
  }

  button:hover {
    text-decoration: underline;
  }

  .counter{
    background-color: var(--color-background);
    border-radius: var(--radius-1);
    padding: 0.25rem;
  }
`;


