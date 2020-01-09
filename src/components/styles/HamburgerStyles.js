import styled from "styled-components"

export const HamburgerButton = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  right: 20px;
  top: 40px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: var(--primaryColor);
  transition: all 0.2s ease;
  border-radius: 10px;

  :hover {
    transform: scale(1.2);
  }
  span {
    line-height: 0;
  }
  @media (min-width: 992px) {
    display: none;
  }
`
