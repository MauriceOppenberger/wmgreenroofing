import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import PageWrapper from "./templateStyles/PageStyle"
import ContactForm from "../components/ContactForm"
import SimpleMap from "../components/SimpleMap"
import styled from "styled-components"
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"
import SEO from "../components/Seo"
const ContactWrapper = styled.div`
  /* display: flex;
  flex-flow: row wrap;
  justify-content: center; */
  .info__section,
  .contact__section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 2rem 0;
  }
  .contact__info {
    /* margin: 2rem 0; */
    flex: 1;
    max-width: 30%;
    text-align: center;
  }
  .contact__icon {
    margin: 1rem auto;
    width: max-content;
    /* background: var(--primaryColor); */
    padding: 1.5rem 2rem;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
  }
  .contact__icon:hover {
    box-shadow: var(--lightShadow);
  }
  .contact__icon > svg {
    transition: all 0.2s ease-in-out;
  }
  .contact__icon:hover > svg {
    transform: scale(1.3);
  }
  .form__container {
    flex: 1;
    max-width: 700px;
    margin-right: auto;
  }
  .map__container {
    flex: 1;
    max-width: 450px;
    height: 300px;
    margin: 0 auto;
    margin-left: 2rem;
  }
  @media screen and (max-width: 776px) {
    .map__container,
    .form__container {
      flex: 1 100%;
      margin: auto;
    }
  }
  @media screen and (max-width: 480px) {
    .contact__info {
      /* margin: 2rem 0; */
      flex: 1 100%;
      max-width: 100%;
    }
  }
`
const ContactTemplate = ({ data: { wpgraphql } }) => (
  <Layout>
    <SEO title={wpgraphql.currentPage.title} />
    <div className="page__title">
      <h1 dangerouslySetInnerHTML={{ __html: wpgraphql.currentPage.title }} />
    </div>
    <PageWrapper>
      <div className="page__container">
        <ContactWrapper>
          <div className="contact__section">
            <div className="form__container">
              <h3>Write us</h3>
              <ContactForm className="contact" />
            </div>
            <div className="map__container">
              <h3>Visit us</h3>
              <SimpleMap />
            </div>
          </div>
          <div className="info__section">
            <div className="contact__info email">
              <div className="contact__icon">
                <MdEmail size={44} color="#340610" />
              </div>

              <p>info@wmgreenroofing.ca</p>
            </div>
            <div className="contact__info phone">
              <div className="contact__icon">
                <MdPhone size={44} color="#340610" />
              </div>
              <p>Tel: (519) 822-6414</p>
            </div>
            <div className="contact__info location">
              <div className="contact__icon">
                <MdLocationOn size={44} color="#340610" />
              </div>
              <p>45 Dawson Rd, Guelph, ON N1H 1B1</p>
            </div>
          </div>
        </ContactWrapper>
      </div>
    </PageWrapper>
  </Layout>
)

export default ContactTemplate

export const pageQuery = graphql`
  query($pageId: Int!) {
    wpgraphql {
      currentPage: pageBy(pageId: $pageId) {
        title
      }
    }
  }
`
