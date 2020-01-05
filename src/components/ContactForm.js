import React from "react"
import FormWrapper from "./Styles/FormStyles"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"
import { useValidate } from "../hooks/useValidate"

const ContactForm = ({ className }) => {
  const { register, handleSubmit, errors } = useForm()
  console.log(errors)
  const onSubmit = () => {
    document.getElementById("myForm").reset()
  }
  return (
    <FormWrapper>
      <form
        id="myForm"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        // action="#"

        className={`${className}__form`}
        data-netlify="true"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            ref={register({ required: true, minLength: 2 })}
          />
        </label>

        <div className="error">{useValidate(errors.name)}</div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            ref={register({
              required: true,
              pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
            })}
          />
        </label>

        <div className="error">{useValidate(errors.email)}</div>

        <label>
          Phone:
          <input
            type="number"
            name="phone"
            ref={register({
              required: true,
            })}
          />
        </label>
        <div className="error">{useValidate(errors.phone)}</div>
        <label>
          Message:
          <textarea
            type="text"
            name="message"
            placeholder="Let us know what we can help you with"
            ref={register({ required: true, minLength: 25 })}
          />
        </label>
        <div className="error">{useValidate(errors.message)}</div>

        <div className="selection">
          <p>Choose your Roof-Typ:</p>
          <span>
            <input
              type="radio"
              value="sloped"
              name="roofTyp"
              ref={register({ required: true })}
            />
            <label htmlFor="sloped">Sloped</label>
          </span>
          <span>
            <input
              id="flat"
              type="radio"
              value="flat"
              name="roofTyp"
              ref={register({ required: true })}
            />
            <label htmlFor="flat">Flat</label>
          </span>
        </div>

        <div className="error">{useValidate(errors.roofTyp)}</div>

        <div data-netlify-recaptcha="true"></div>
        <button type="submit" value="Send" className="btn__submit btn">
          Submit
        </button>
      </form>
    </FormWrapper>
  )
}
ContactForm.propTypes = {
  className: PropTypes.string,
}
export default ContactForm
