import React from "react"
import FormWrapper from "./styles/FormStyles"
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
  const [loadRecaptcha, setLoadRecaptcha] = React.useState(false)
  const { register, handleSubmit, errors } = useForm()

  React.useEffect(() => {
    window.addEventListener("scroll", () => setLoadRecaptcha(true), {
      passive: true,
      once: true,
    })
  }, [])

  const onResolved = value => {
    if (value) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          ...state,
          "g-recaptcha-response": value,
        }),
      })
        .then(() => setState({ submitted: "true" }))
        .then(() => recaptchaRef.current.reset())
        .catch(error => alert(error))
    } else {
      setState({ submitted: "false" })
    }
  }
  const onSubmit = (data, e) => {
    if (data) {
      e.preventDefault()
      recaptchaRef.current.execute()
      setState({ ...data, "form-name": e.target.getAttribute("name") })
      e.target.reset()
    }
  }

  return (
    <FormWrapper>
      <form
        name="contact"
        noValidate
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
          <label className="required">
            <span>Name:</span>
            <input
              placeholder="Jane Doe"
              type="text"
              name="name"
              ref={register({ required: true, minLength: 2 })}
            />
          </label>
        </p>
        <div className="error">{useValidate(errors.name)} </div>
        <p>
          <label className="required">
            <span>Email:</span>

            <input
              type="email"
              name="email"
              placeholder="janedoe@gmail.com"
              ref={register({
                required: true,
                pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
              })}
            />
          </label>
        </p>
        <div className="error">{useValidate(errors.email)}</div>
        <p>
          <label className="required">
            <span>Phone:</span>
            <input
              type="number"
              placeholder="(647)474-47474"
              name="phone"
              ref={register({
                required: true,
              })}
            />
          </label>
        </p>
        <div className="error">{useValidate(errors.phone)}</div>
        <p>
          <label className="required">
            <span> Message:</span>
            <textarea
              type="text"
              name="message"
              placeholder="What can we help with?"
              ref={register({ required: true, minLength: 25 })}
            />
          </label>
        </p>
        <div className="error">{useValidate(errors.message)}</div>

        <div className="selection required">
          <span>Roof Type:</span>
          <span>
            <label htmlFor="sloped">
              {" "}
              <input
                type="radio"
                value="sloped"
                name="roofTyp"
                ref={register({ required: true })}
              />
              Sloped
            </label>
          </span>
          <span>
            <label htmlFor="flat">
              {" "}
              <input
                id="flat"
                type="radio"
                value="flat"
                name="roofTyp"
                ref={register({ required: true })}
              />
              Flat
            </label>
          </span>
        </div>

        <div className="error">{useValidate(errors.roofTyp)}</div>
        {loadRecaptcha ? (
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            tabindex={-1}
            sitekey="6LcO5swUAAAAAOGL9jxHtOHci93_mtz2jtTbereW"
            onChange={onResolved}
          />
        ) : null}

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

        <button
          type="submit"
          value="Send"
          name="submit-button"
          className="btn__submit btn"
        >
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
