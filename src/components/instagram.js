import React, { useState, useEffect } from "react"
import styled from "styled-components"

const url = `/.netlify/functions/instagram`

function useInstagram() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  return posts
}

const InstagramWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 2rem auto;
  max-width: 1200px;

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
    /* height: 18vmax; */
    max-height: 380px;
    max-width: 384px;
    background: #000;

    img {
      object-fit: cover;
    }
  }
  .gallery__image:hover > img {
    transition: all 0.3s ease;
    opacity: 0.5;
  }

  @media screen and (max-width: 448px) {
    .gallery__item {
      flex: 1 100% !important ;
    }
  }
`

export default function Instagram() {
  const gramz = useInstagram()
  return (
    <InstagramWrapper>
      {gramz.map(gram => (
        <li key={gram.id} className="gallery__item">
          <a href={gram.url} target="_blank" rel="noopener noreferrer">
            <div className="gallery__image">
              <img src={gram.thumbnail} alt={gram.caption} />
            </div>
          </a>
        </li>
      ))}
    </InstagramWrapper>
  )
}
