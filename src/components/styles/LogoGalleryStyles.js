import styled from "styled-components"

const LogoGalleryWrapper = styled.div`
  margin: 2rem;
  h2.title {
    text-align: center;
  }
  .logo__gallery {
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    max-width: 1280px;
    padding: 1rem 0;
  }
  .gallery__item {
    list-style: none;
    flex: 1;
    max-width: 250px;
    min-width: 100px;
    margin: 1rem 2rem;
    padding: 1rem 0;
  }
`

export default LogoGalleryWrapper
