import styled from "styled-components"

const PageWrapper = styled.div`
  .page__container {
    max-width: 1400px;
    margin: 2rem auto;
    padding: 0 2rem;
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
    padding: 0;
  }
  .page__content {
    flex: 2;
    text-align: left;
    margin: 0 1rem;
    padding: 0 1rem;
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
  }
  .page__content ul li {
    list-style: inside;
  }

  @media screen and (max-width: 776px) {
    .page__container {
      padding: 0 1rem;
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
    .wp-block-group__inner-container {
      padding: 0;
    }
  }
`
export default PageWrapper
