import styled from "styled-components"

const ContentWrapper = styled.div`
  h2.title {
    font-size: 2.5rem;
    line-height: 1.5;
  }
  h3.title {
    font-size: 2rem;
    line-height: 1.5;
  }
  .wp-block-group__inner-container {
    display: flex;
    flex-flow: row wrap;
    max-width: 1400px;
    margin: auto;
    padding: 2rem 0;
  }
  /* INTRO SECTION  */
  .intro__container {
    text-align: center;
  }

  .intro__container .wp-block-group__inner-container {
    justify-content: center;
  }
  .intro__item {
    flex: 1 2;
    min-width: 300px;
    padding: 0 1rem;
    margin: 0 1rem;
  }
  .intro__item * {
    flex: 1 100%;
  }
  .intro__item .icon {
    max-width: 75px;
  }
  .intro__item.installation {
    margin: 0 1rem;
  }

  @media screen and (max-width: 667px) {
    .intro__item {
      min-width: 100%;
    }
  }
  /* GAF SECTION  */

  .gaf__container {
    background: var(--primaryColor);
    color: var(--mainWhite);
  }

  .gaf__content {
    flex: 2;
    text-align: left;
    margin: 0 1rem;
    padding: 0 1rem;
  }
  .gaf__gallery {
    flex: 1;
    margin: 0 1rem;
  }
  @media screen and (min-width: 776px) {
    .gaf__gallery .logo:nth-child(1) {
      flex: 1;
      min-width: 100%;
      margin: 1rem auto;
      text-align: center;
    }
  }
  .gaf__gallery .logo {
    flex: 1;
    min-width: 40%;
    margin: 1rem;
    text-align: center;
  }
  .gaf__gallery .logo img {
    margin: auto;
  }

  @media screen and (max-width: 776px) {
    .gaf__gallery {
      flex: 1;
      min-width: 90%;
      text-align: center;
      padding: 0 1rem;
    }
    @media screen and (min-width: 480px) {
      .gaf__gallery .logo {
        flex: 1;
        min-width: 25%;
      }
    }
    .gaf__gallery .logo img {
      max-width: 130px;
    }
  }

  /* SERVICES SECTION  */
  @media screen and (max-width: 667px) {
    .service__item {
      min-width: 50% !important;
    }
    .service__item .item__icon {
      max-width: 100% !important;
    }
    .service__item .item__content {
      flex: 1 100% !important;
      max-width: 100% !important;
    }
  }
  .service__container .wp-block-group__inner-container {
    justify-content: center;
  }
  .service__list {
    max-width: 100%;
  }
  .service__list .service__list .wp-block-group__inner-container {
    padding: 1rem 0;
  }
  .service__item {
    flex: 1;
    margin: 0 1rem;
    padding: 0 1rem;
    min-width: 400px;
  }
  .service__item .wp-block-group__inner-container {
    justify-content: start;
    align-items: normal;
  }
  .service__item .item__icon {
    flex: 1;
    max-width: 10vmax;
    text-align: end;
  }
  .service__item .item__icon img {
    max-height: 75px;
    max-width: 75px;
    width: 10vmax;
    height: auto;
    margin: 0;
  }
  .service__item .item__content {
    flex: 1;
    max-width: 550px;
  }

  .service__item .item__content .title {
    margin: 0.5rem 0;
    flex: 1;
    min-height: 160px;
  }

  .service__item .item__content .blurb {
    padding-top: 1rem;
    border-top: 1px solid var(--primaryColor);
  }

  @media screen and (min-width: 2100px) {
    .wp-block-group__inner-container {
      max-width: 1600px;
    }
  }
  @media screen and (max-width: 480px) {
    .service__item .item__content .title {
      font-size: 1.5rem !important;

      min-height: 0;
      max-width: 200px;
    }
  }

  .testimony__container {
    background: var(--primaryColor);
    color: var(--mainWhite);
    text-align: center;
    padding: 2rem;
  }
`
export default ContentWrapper
