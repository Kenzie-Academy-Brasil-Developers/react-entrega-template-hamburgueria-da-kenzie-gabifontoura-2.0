import styled from "styled-components";

export const StyledModalBg = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const StyledModalBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: max-content;
  background-color: var(--color-grey-3);
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-2);

  .modal-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: var(--color-grey-2);
    padding: 1rem;
  }
`;
