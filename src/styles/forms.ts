import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: transparent;
  border: 2px solid var(--color-grey-3);
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  overflow-x: hidden;
  width: 100%;
  max-width: 30rem;

  .main-nav-active {
    color: var(--color-grey-1);
    text-align: center;
    justify-content: center;
    background-color: var(--color-grey-3);
    height: 2.5rem;
    border-radius: var(--radius-1);
    padding: 0.65rem 1rem;

    &:hover {
        background-color:var(--color-grey-2);
        color: #000000
      }

    }
  
`;
