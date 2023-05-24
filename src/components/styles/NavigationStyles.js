import styled from "styled-components"

export const NavWrapper = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
  .primary__nav {
    /* margin: 1rem 0!impotant; */
  }
  .primary__nav,
  .footer__nav {
    justify-content: end;
    display: flex;
    flex-wrap: nowrap;
    margin: 1rem 0;
    padding: 0;
  }
  .footer {
    justify-content: center;
    padding-bottom: 1rem;
  }
  .header__nav__item,
  .footer__nav__item {
    list-style: none;
    margin: 0 1rem 0 0;
    .active {
      color: #b79657;
    }
    a,
    p {
      font-size: 0.9rem;
      font-weight: 600 !important;
      text-decoration: none;
      color: #fff;
    }
    p::after {
      content: " ▾";
      font-size: 13px;
    }
    a:hover {
      color: #b79657;
    }
    p:hover {
      color: #b79657;
      cursor: pointer;
    }
  }

  .header__nav__item:hover > ul {
    display: block; /*show submenu items when hovering over parent*/
  }

  .header__nav__item .sub__nav {
    animation: fadeInMenu 0.3s all ease-in;
    display: none; /*defautl state */
    position: absolute;
    margin: 2rem 0;
    padding: 20px 10px;
    background: var(--mainBlack);
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
