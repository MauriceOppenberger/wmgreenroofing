import styled from "styled-components"

const StyledInnerWrapper = styled.div`
  .landing__container {
    min-height: 69vh;
    display: flex;
    flex-flow: row wrap;
    padding: 1rem;
    max-width: 1800px;
    margin: auto;
  }
  .badge__container {
    flex: 1;
    .badge {
      width: 150px;
      position: absolute !important;
      /* bottom: -85px; */
      left: 1rem;
      z-index: 1;
    }
  }
  .landing__submission {
    flex: 1;
    background: var(--primaryColor);
    color: var(--mainWhite);
    box-shadow: var(--darkShadow);
    padding: 1.5rem;
    max-width: 550px;
    min-width: 400px;
    display: block;
    margin-bottom: 2rem;
    border-radius: 5px;
  }
  .landing__cta {
    display: none;
    margin: auto;
  }
  .cta-btn {
    font-size: 1.5rem;
    line-height: 1.5;
    padding: 10px 20px;
    font-weight: 600;
    background: var(--mainWhite);
    border-radius: 20px;
  }

  @media screen and (max-width: 480px) {
    .landing__container {
      padding: 0px !important;
    }

    .badge__container {
      height: 0 !important;
      width: 0 !important;
      min-width: 0 !important;
      flex: 0 !important;
      .badge {
        width: 130px;
        margin: 2rem 0;
        bottom: -30px;
        left: 35%;
      }
    }
  }

  @media screen and (max-width: 776px) {
    .badge__container {
      flex: 1;
      min-width: 100%;
    }
    .landing__submission {
      display: none;
      max-width: 100% !important;
      margin: 0 auto !important;
    }
    .landing__cta {
      display: block;
    }
  }

  @media screen and (min-width: 2100px) {
    .landing__container {
      max-width: 1600px;
    }
    .landing__submission {
      max-width: 700px;
    }
  }
`

export default StyledInnerWrapper
