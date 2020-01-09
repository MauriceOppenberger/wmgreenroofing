import styled from "styled-components"

const SocialNavWrapper = styled.div`
  padding: 1rem 0;
  justify-content: space-evenly;
  color: #fff;

  .header {
    max-width: max-content;
    margin: 0 0 0 auto;
  }
  .footer {
    max-width: max-content;
    margin: 1rem auto;
  }
  p {
    margin: auto 0;
  }
  .social__nav {
    display: flex;
    flex-flow: row wrap;
  }
  .nav__item {
    flex: 1;
    margin: 0 1rem;
    list-style: none;
  }
  .nav__item a svg {
    transition: all 0.2s ease-in-out;
  }
  .nav__item a:hover svg {
    transform: scale(1.3);
  }
`

export default SocialNavWrapper
