import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.colorText};
`;

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.colorGrey3};
  border-radius: var(--radius-1);
  background-color: ${({ theme }) => theme.colors.colorBackGround};
  color: ${({ theme }) => theme.colors.colorText};
  padding: 0 1rem;
  height: 3rem;
  width: 100%;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.colorBrand1};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

