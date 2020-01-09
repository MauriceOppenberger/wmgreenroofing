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
  const { title } = currentPage
  return (
    <Layout>
      <SEO title={title} />
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
}

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
