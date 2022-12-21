import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: transparent;
  border: 2px solid ${({theme}) => theme.colors.colorGrey2};
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  width: 100%;
  max-width: 30rem;
  color: ${({theme}) => theme.colors.colorGrey4};
  align-self: center;


  @media (max-width: 475px) {
    max-width: 20rem;

    }


  .main-nav-active {
    color:  ${({theme}) => theme.colors.colorGrey4};
    text-align: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.colorGrey2};
    height: 2.5rem;
    border-radius: var(--radius-1);
    padding: 0.65rem 1rem;

    &:hover {
        background-color:var(--color-grey-2);
        color: #000000
      }

    }
  
`;
