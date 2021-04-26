import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
 

const InstagramWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 2rem auto;
  max-width: 1200px;
  justify-content: center;

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
    height: 380px;
    max-width: 384px;
    background: #000;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .gallery__image:hover > img {
    transition: all 0.3s ease;
    opacity: 0.5;
  }
  .btn_load-more {
    border-radius: 5px;
    background: var(--primaryColor);
    border: honeydew;
    color: #fff;
    opacity: .5;
    padding: 5px 10px;
  }
  .btn_load-more:hover {
    opacity: 1;
  }
  @media screen and (max-width: 448px) {
    .gallery__item {
      flex: 1 100% !important ;
    }
  }
`

export default function Instagram() {
  const [limit, updateLimit] = useState(9)
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent {
        edges {
          node {
            media_id
            permalink
            username
            media_type
            caption
            localImage {
              publicURL
            }
          }
        }
      }
    }
  `)

  let arrayOfInstaImages = _get(data, "allInstagramContent.edges")

  return (
    
    
    <InstagramWrapper>

      {arrayOfInstaImages?.slice(0, limit).map(({ node }) => (
        <li key={node.media_id} className="gallery__item">
          <a href={node.permalink} target="_blank" rel="noopener noreferrer">
            <div className="gallery__image">
              {node.media_type !== "VIDEO" ? (
                <img src={node.localImage?.publicURL} alt={node.caption} />
              ) : (
                <video
                muted={true}
                  src={node.localImage?.publicURL}
                  alt={node.caption}
                  controls={true}
                  autoPlay={false}
                />
              )}
            </div>
          </a>
        </li>
      ))}
      <button className="btn_load-more" onClick={() => updateLimit((prev) => prev + 9)}>load more</button>
    </InstagramWrapper>
  )
}
