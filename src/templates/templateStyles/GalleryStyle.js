import styled from "styled-components"

const GalleryWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 2rem;
  @media screen and (max-width: 776px) {
    margin: 0rem !important ;
    padding: 2rem 0;
  }
  .gallery__item {
    flex: 1 30%;
    list-style: none;
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
