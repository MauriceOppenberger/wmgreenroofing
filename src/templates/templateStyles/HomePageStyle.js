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
    margin-bottom: 1rem;
  }
  .intro__item .icon {
    max-width: 75px;
  }
  .intro__item .icon img{
    max-height: 75px;
  }
  .intro__item.installation {
    margin: 0 1rem;
  }
  .video__container__homepage {
    max-width: 75%;
    margin: 0 auto 2rem;

    video {
      width: 100%;
      border-radius: 15px;
    }
  }

  @media screen and (max-width: 667px) {
    .intro__item {
      min-width: 100%;
    }
    .intro__item * {
      margin: 0.5rem 0;
    }
    .intro__container .wp-block-group__inner-container {
      padding: 1rem;
    }
    .video__container__homepage {
      max-width: 95%;
      margin: 0 auto 2rem;
    }
  }
  /* GAF SECTION  */

  .gaf__container {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0 2rem;
  }
  .socialMedia__container {
    margin: 2rem;
    text-align: center;
  }

  .gaf__content {
    flex: 2;
    text-align: left;
    max-width: 55vmax;

    a {
      text-decoration: underline;
    }
  }
  .gaf__gallery {
    flex: 1;
    margin: 1rem auto;
    max-width: 25vmax;

    .wp-block-group__inner-container {
      padding: 0 !important;
    }
    .logo img{
      height: auto;
    }
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
    min-width: 30%;
    margin: 1rem;
    text-align: center;
  }
  .gaf__gallery .logo img {
    margin: auto;
  }

  @media screen and (max-width: 776px) {
    .gaf__container {
      padding: 0 1rem;
    }
    .gaf__content {
      max-width: 100%;
    }
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
      margin: 0 1rem 2rem !important;

      height: max-content !important;
    }
    .service__item .item__icon {
      max-width: 100% !important;
      /* display: none; */
    }
    .service__item .item__content {
      flex: 1 100% !important;
      max-width: 100% !important;
    }
  }
  .service__container .wp-block-group__inner-container {
    justify-content: center;
    padding-bottom: 0;
  }
  .service__list {
    max-width: 100%;
  }
  .service__list .service__list .wp-block-group__inner-container {
    padding: 1rem 0;
  }
  .service__item {
    flex: 1;
    margin: 1rem;
    padding: 0 1rem;
    min-width: 400px;
    height: 350px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.08);
  }
  .service__item .wp-block-group__inner-container {
    justify-content: start;
    align-items: normal;
    padding: 0;
  }
  .service__item .item__icon {
    flex: 1;
    max-width: 5vmax;
    text-align: center;
    min-width: 100%;
    margin: 1rem 0;
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
  }

  .service__item .item__content .title {
    margin: 0.5rem 0;
    flex: 1;

    text-transform: capitalize;
    min-width: 100%;

    font-size: 1.5rem;
  }

  .service__item .item__content .blurb {
    padding-top: 1rem;
    border-top: 1px solid var(--primaryColor);
    width: 100%;
  }

  @media screen and (min-width: 2100px) {
    .wp-block-group__inner-container {
      max-width: 1600px;
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
