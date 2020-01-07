import React from "react"
import FormWrapper from "./Styles/FormStyles"
import PropTypes from "prop-types"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { useValidate } from "../hooks/useValidate"

const recaptchaRef = React.createRef()

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = ({ className }) => {
  const [state, setState] = React.useState({})
  const { register, handleSubmit, errors } = useForm()

  const onResolved = value => {
    if (value) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          ...state,
          "g-recaptcha-response": true,
        }),
      })
        // setState({ submitted: "true" })
        .then(body => console.log(body))
        .then(() => recaptchaRef.current.reset())
        .catch(error => alert(error))
    } else {
      setState({ submitted: "false" })
    }
  }
  const onSubmit = (data, e) => {
    e.preventDefault()
    recaptchaRef.current.execute()
    setState({ ...data, "form-name": e.target.getAttribute("name") })
    e.target.reset()
  }

  return (
    <FormWrapper>
      <form
        name="contact"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        // action="#"
        className={`${className}__form`}
        data-netlify="true"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Name:
            <input
              type="text"
              name="name"
              ref={register({ required: true, minLength: 2 })}
            />
          </label>
        </p>
        <div className="error">{useValidate(errors.name)} </div>
        <p>
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
        </p>
        <div className="error">{useValidate(errors.email)}</div>
        <p>
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
        </p>
        <div className="error">{useValidate(errors.phone)}</div>
        <p>
          <label>
            Message:
            <textarea
              type="text"
              name="message"
              placeholder="Let us know what we can help you with"
              ref={register({ required: true, minLength: 25 })}
            />
          </label>
        </p>
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

        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          tabindex={-1}
          sitekey="6LcO5swUAAAAAOGL9jxHtOHci93_mtz2jtTbereW"
          onChange={onResolved}
        />
        {state.submitted ? (
          state.submitted === "false" ? (
            <div className="error">
              <p className="err">ReCaptcha Challenge not passed</p>
            </div>
          ) : (
            <div className="success">
              <h3 className="pass">Message Sent!</h3>
            </div>
          )
        ) : null}

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
