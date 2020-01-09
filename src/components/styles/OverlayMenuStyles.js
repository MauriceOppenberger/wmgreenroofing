import styled from "styled-components"

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? "1" : "0")};
  transform: ${props =>
    props.menuOpen ? "translateX(0%)" : "translateX(-100%)"};
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  left: 0px;
  padding: 0px;
  transition: all 0s ease;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: start;
    transform: ${props =>
      props.menuOpen ? "translateX(0%)" : "translateX(-100%)"};
    justify-content: center;
    background: #000;
    width: 60%;
    height: 100%;
    color: #fff;
    padding: 20px;
    transition: all 0.3s ease;

    .overlayMenu {
      text-align: left;
      list-style-type: none;
      margin: 0;

      .overlayMenu__nav__item {
        /* margin: 0 0 20px 0; */
        line-height: 1.5;
        padding: 5px 10px;

        .active {
          color: #d22e26;
        }
      }
      .overlayMenu__nav__item a,
      p {
        font-family: "Teko", Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        color: #fff;
        transition: all 0.3s ease;
        text-decoration: none;

        :hover {
          color: #d22e26;
        }
      }
    }

    .sub__nav {
      display: block;
      margin: 0;
      padding: 0 10px;

      .sub__nav__item {
        list-style: inside;
        color: #fff;
        width: auto;
        font-size: 1rem;

        .sub__nav__item a {
          padding: 5px 10px;
          white-space: nowrap;
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 0.5s ease;
    transform-origin: center;

    :hover {
      transform: rotate(90deg);
    }
    .closeButton span {
      height: 20px;
      width: 20px;
    }
  }
`
