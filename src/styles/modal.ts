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
  height: max-content;
  max-height: 30rem;
  width: 100%;
  max-width: 25rem;
  background-color: ${({ theme }) => theme.colors.colorGrey1};
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-2);

  .modal-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.colorBrand1};
    padding: 1rem;
  }

  .cartList {
    overflow-y: auto;
    width: 100%;
    

    /* width */
    ::-webkit-scrollbar {
      width: 0.25rem;
      border-radius: var(--radius-2);
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.colorGrey1};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.colorGrey3};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.colorBrand2};
    }
  }
`;
