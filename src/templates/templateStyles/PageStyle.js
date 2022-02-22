import styled from "styled-components"

const PageWrapper = styled.div`
  .page__container {
    max-width: 1400px;
    margin: 2rem auto;
    width: 90vw;
  }
  .page__gallery img {
    height: auto;
  }
  .wp-block-group__inner-container,
  .inner-container {
    display: flex;
    flex-flow: row wrap;
    max-width: 1400px;
    margin: auto;
    padding: 2rem 0;
  }
  .page__content .wp-block-group__inner-container {
    flex-direction: initial !important;
  }
  .wp-block-group__inner-container img {
    height: auto;
  }

  /* VIDEO CONTAINER GALLERY PAGE */
  .video__container {
    width: 100%;
    height: auto;

    margin-top: 2rem;
    video {
      max-width: 100%;
      border-radius: 15px;
    }
  }

  @media screen and (min-width: 776px) {
    .roofing .wp-block-group__inner-container:first-child {
      flex-direction: row-reverse;
    }
  }
  .page__content .wp-block-group__inner-container {
    padding: 0;
  }
  .page__content {
    flex: 2;
    text-align: left;
    margin: 0 1rem;
    padding: 0 1rem;
  }
  a.obrien-link {
    color: #350610 !important;
    font-weight: 600;
  }

  .page__gallery {
    flex: 1;
    margin: 2rem 1rem;
  }
  .page__review {
    flex: 1;
    margin: 0 1rem;
  }
  .page__content .list,
  .text,
  .sub__title {
    flex: 1 100%;
  }
  .page__review .logo {
    flex: 1 100%;
    text-align: center;
  }
  .page__review .wp-block-group__inner-container {
    padding: 0;
  }
  .logo img {
    height: auto;
    max-width: 200px;
  }
  .page__content .list {
    margin-bottom: 1.45rem;
    padding-left: 1.45rem;
  }
  .page__content .list li {
    list-style: inherit;
  }
  .page__content .text a {
    color: -webkit-link;
  }

  .page__gallery ul li {
    list-style: none;
    padding: 2rem 1rem;
    text-align: center;
  }
  .page__content ul li {
    list-style: inside;
  }

  @media screen and (max-width: 776px) {
    .page__container {
      margin: 0 auto;
    }

    .page__content {
      flex: 1 100%;
      padding: 0;
      margin: 0;
    }
    .page__gallery {
      flex: 1 100%;
      padding: 0;
      margin: 0;
    }
    .page__gallery li:nth-child(1) {
      padding: 0;
      margin: -2rem;
      margin-bottom: 0;
    }
    .page__gallery li:nth-child(2) {
      float: left;
      max-width: 50%;
    }
    .page__gallery li:nth-child(3) {
      float: right;
      max-width: 50%;
    }
    .wp-block-group__inner-container {
      /* padding: 0; */
    }
  }
`
export default PageWrapper
