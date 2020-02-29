import styled from "styled-components"

export const TestemonyWrapper = styled.div`
  position: absolute;
  /* height: 800px; */
  width: 100%;
  margin: auto;
  opacity: 0;
  transition: opacity 1s ease;
  background-size: cover !important;
  background-position: center !important;
  .testemony__card {
    width: 70vmax;
    /* max-width: 550px; */
    margin: auto;
    /* max-width: 100%; */
    text-align: center;
    box-shadow: var(--darkShadow);

    max-width: 450px !important;
    background: var(--offWhite);
    color: #000;
    padding: 1rem;
    border-radius: 5px;
  }
  .card__content {
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    max-width: 400px;
    margin: auto;

    blockquote {
      padding: 0;
      display: flex;
      margin: 0;
      height: 300px !important;
      align-items: center;
      height: 400px;
      overflow: scroll;
    }
  }
  h3 {
    margin: 0;
  }
  .card__image {
    max-width: 45px;
    margin: 0 auto;
  }
`

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;

  .active {
    z-index: 10;
    opacity: 1;
  }

  .active div {
    opacity: 1;
  }

  .active div .wbn-text {
    opacity: 1;
    transform: translateY(0%);
  }

  .active div .wbn-header {
    opacity: 1;
    transform: scale(1);
  }
`
