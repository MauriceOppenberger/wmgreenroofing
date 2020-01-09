import styled from "styled-components"
const FormWrapper = styled.div`
  form {
    margin: 0;
  }
  p {
    margin: 0;
  }

  label {
    display: grid;
    /* margin: 0.75rem 0 0 0; */
  }
  .required::before {
    display: contents;
    content: "* ";
    color: #bf1650;
  }
  label input {
    padding: 8px 16px;
    border: 2px solid lightgray;
    border-radius: 10px;
  }
  label textarea {
    padding: 8px 16px;
    min-height: 100px;
    border: 2px solid lightgray;
    border-radius: 10px;
  }
  .hidden {
    display: none;
  }

  .error {
    min-height: 0.5rem;
    margin: 0.5rem;
  }
  .error p {
    font-size: 0.9em;
  }
  .error p.err {
    color: #bf1650;
  }
  .error p::before {
    display: inline;
    content: "⚠ ";
  }
  .error p.warn {
    color: #b79657;
  }
  .success {
    text-align: center;
    padding: 0.5rem;
    border: 1px solid green;
    border-radius: 10px;
  }
  .success .pass {
    margin: 0;
  }
  .review {
    max-width: 650px;
  }

  .selection {
    display: flex;
    flex-flow: row wrap;
    /* margin: 0.75rem 0 0 0; */
  }
  .selection p {
    flex: 1;
    margin: auto;
  }
  .selection span {
    margin: 0.3rem;
  }
  .selection input {
    margin-right: 0.5rem;
  }
  .selection label {
    display: inline;
  }
  .landing__form .btn__submit {
    background: var(--mainWhite);
    width: 100%;
    color: var(--darkGrey);
  }
  .landing__form .btn__submit:hover {
    color: var(--mainBlack);
    box-shadow: var(--lightShadow);
  }
  .contact__form .btn__submit {
    background: var(--primaryColor);
    width: 100%;
    color: var(--darkGrey);
  }
  .contact__form .btn__submit:hover {
    color: var(--mainWhite);
    box-shadow: var(--lightShadow);
  }
  .review__form .btn__submit {
    width: 100%;
    background: var(--primaryColor);
    color: var(--darkGrey);
  }
  .review__form .btn__submit:hover {
    color: var(--mainWhite);
    box-shadow: var(--lightShadow);
  }
`

export default FormWrapper