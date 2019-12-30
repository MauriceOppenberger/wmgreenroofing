import React from "react"
import FormWrapper from "./Styles/FormStyles"

const ContactForm = ({ className }) => {
  return (
    <FormWrapper>
      <form action="#" method="POST" className={`${className}__form`}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <label>
          Message:
          <textarea
            type="text"
            name="message"
            placeholder="Tell us about your project"
          />
        </label>
        <div className="selection">
          <p>Choose your Roof typ:</p>
          <span>
            <input type="checkbox" id="sloped" name="sloped" />
            <label for="sloped">Sloped</label>
          </span>
          <span>
            <input type="checkbox" id="flat" name="flat" />
            <label for="flat">Flat</label>
          </span>
        </div>
        <button type="submit" value="Send" className="btn__submit btn">
          Submit
        </button>
      </form>
    </FormWrapper>
  )
}
export default ContactForm
