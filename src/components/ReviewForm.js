import React from "react"
import FormWrapper from "./Styles/FormStyles"
import ReCAPTCHA from "react-google-recaptcha"
import { navigateTo } from "gatsby-link"
import { useForm } from "react-hook-form"
import { useValidate } from "../hooks/useValidate"

const recaptchaRef = React.createRef()
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const ReviewForm = () => {
  const [state, setState] = React.useState({})
  const { register, handleSubmit, errors } = useForm()

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
    e.preventDefault()
    recaptchaRef.current.execute()
    setState({ ...data, "form-name": e.target.getAttribute("name") })
    e.target.reset()
  }
  return (
    <FormWrapper>
      <div className="review">
        <h3 className="title">
          Our Client’s opinion is extremely important to us and is always
          appreciated.
        </h3>
        <form
          name="review"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="review" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label class="required">
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
            <label class="required">
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
            <label class="required">
              Message:
              <textarea
                type="text"
                name="message"
                placeholder="Let us know what we can help you with"
                ref={register({ required: true })}
              />
            </label>
          </p>
          <div className="error">{useValidate(errors.message)}</div>
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
      </div>
    </FormWrapper>
  )
}
export default ReviewForm
