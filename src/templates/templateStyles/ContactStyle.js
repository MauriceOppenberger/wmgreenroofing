import styled from "styled-components"

const ContactWrapper = styled.div`
  .info__section,
  .contact__section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 0 1rem;
    padding: 2rem 1rem;
  }
  .contact__info {
    flex: 1;
    max-width: 30%;
    text-align: center;
  }
  .contact__icon {
    margin: 1rem auto;
    width: max-content;

    padding: 1.5rem 2rem;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
  }
  .contact__icon:hover {
    box-shadow: var(--lightShadow);
  }
  .contact__icon > svg {
    transition: all 0.2s ease-in-out;
  }
  .contact__icon:hover > svg {
    transform: scale(1.3);
  }
  .form__container {
    flex: 1;
    max-width: 700px;
    margin-right: auto;
  }
  .map__container {
    flex: 1;
    max-width: 450px;
    height: 300px;
    margin: 0 auto;
    margin-left: 2rem;
  }
  @media screen and (max-width: 776px) {
    .map__container,
    .form__container {
      flex: 1 100%;
      margin: auto;
    }
  }
  @media screen and (max-width: 480px) {
    .contact__info {
      flex: 1 100%;
      max-width: 100%;
    }
  }
`

export default ContactWrapper
