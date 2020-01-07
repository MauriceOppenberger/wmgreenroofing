import styled from "styled-components"

export const HeaderWrapper = styled.header`
  background-color: var(--primaryColor);
  /* margin-bottom: 1.45rem; */
  margin-bottom: 0;
  .header__container {
    margin: auto;
    max-width: 1400px;
    padding: 1.45rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .header__container h1 {
    margin: 0;
  }
  .header__container h1 a {
    text-decoration: none;
    color: #fff;
  }
  .contact__info {
    display: flex;
    color: #fff;
    justify-content: flex-end;
    align-items: center;
  }
  .contact__info span {
    margin: 0 1rem;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 776px) {
    .nav__container {
      display: none;
    }
  }
`
