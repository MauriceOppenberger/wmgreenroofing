import styled from "styled-components"

export const NavWrapper = styled.div`
  margin: auto 0;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .primary__nav {
    display: flex;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0;
  }
  .footer {
    justify-content: center;
    padding-bottom: 1rem;
  }
  .nav__item {
    list-style: none;
    margin: 0 1rem 0 0;
  }
  .nav__item .active {
    color: #d22e26;
  }
  .nav__item:hover > ul {
    display: block; /*show submenu items when hovering over parent*/
  }
  .nav__item a {
    text-decoration: none;
    color: #fff;
  }
  .nav__item a:hover {
    color: #d22e26;
  }

  .sub__nav {
    animation: fadeInMenu 0.3s all ease-in;
    display: none; /*defautl state */
    position: absolute;
    margin: 0 0 0 0;
    padding: 20px 10px;
    background: #000;
    z-index: 1000;
  }
  .sub__nav__item {
    list-style: none;
    color: #fff;
    width: auto;
    min-width: 150px;
  }
  .sub__nav__item a {
    padding: 5px 10px;
    white-space: nowrap;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
