import styled from "styled-components"

const GalleryWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 2rem;

  .gallery__item {
    flex: 1 30%;
    list-style: none;
    /* min-width: 350px;
    max-width: 600px; */
    margin: 0.5rem;
  }
  .gallery__image {
    /* height: 350px; */
    max-width: 500px;
    background: #000;
  }
  .gallery__image:hover > picture {
    transition: all 0.3s ease;
    opacity: 0.5;
  }
  @media screen and (max-width: 448px) {
    .gallery__item {
      flex: 1 100% !important ;
    }
  }
`
export default GalleryWrapper
