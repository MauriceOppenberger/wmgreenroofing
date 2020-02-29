import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import PageWrapper from "./templateStyles/PageStyle"
import ContactForm from "../components/ContactForm"
import SimpleMap from "../components/SimpleMap"
import ContactWrapper from "./templateStyles/ContactStyle"
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"
import SEO from "../components/Seo"

const ContactTemplate = props => {
  const {
    data: {
      wpgraphql: { currentPage },
    },
  } = props
  const { title, description } = currentPage
  return (
    <Layout>
      <SEO title={title} description={description.siteDescription} />
      <div className="page__title">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
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
                <a href="mailto:info@wmgreenroofing.ca">
                  <div className="contact__icon">
                    <MdEmail size={44} color="#340610" />
                  </div>

                  <p>info@wmgreenroofing.ca</p>
                </a>
              </div>
              <div className="contact__info phone">
                <a href="tel:(519) 822-6414">
                  <div className="contact__icon">
                    <MdPhone size={44} color="#340610" />
                  </div>

                  <p>Tel: (519) 822-6414</p>
                </a>
              </div>
              <div className="contact__info location">
                <a
                  href="https://www.google.com/maps/place/Wm.+Green+Roofing+Ltd./@43.5464768,-80.2743878,15z/data=!4m2!3m1!1s0x0:0x5da98aafa77f1575?sa=X&ved=2ahUKEwj5tuWKi9TmAhWEg-AKHesrCvwQ_BIwE3oECA0QCA"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="contact__icon">
                    <MdLocationOn size={44} color="#340610" />
                  </div>

                  <p>45 Dawson Rd, Guelph, ON N1H 1B1</p>
                </a>
              </div>
            </div>
          </ContactWrapper>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default ContactTemplate

export const pageQuery = graphql`
  query($pageId: Int!) {
    wpgraphql {
      currentPage: pageBy(pageId: $pageId) {
        title
        description {
          siteDescription
        }
      }
    }
  }
`
