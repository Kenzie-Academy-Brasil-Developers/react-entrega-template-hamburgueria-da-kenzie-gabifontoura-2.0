import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: var(--color-grey-1);
`;

export const StyledInput = styled.input`
  border: 1px solid var(--color-grey-3);
  border-radius: var(--radius-1);
  background-color: var(--color-grey-4);
  color: var(--color-grey-1);
  padding: 0 1rem;
  height: 3.5rem;
  width: 100%;

  &:focus {
    outline: 2px solid var(--color-brand-1);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

