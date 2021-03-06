import React from "react"
import FormWrapper from "./styles/FormStyles"
import ReCAPTCHA from "react-google-recaptcha"
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
          className="review__form"
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
            <label className="required">
              <span>Name:</span>
              <input
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
              <span>Review:</span>
              <textarea
                type="text"
                name="message"
                placeholder="Let us know what we can help you with"
                ref={register({ required: true })}
              />
            </label>
          </p>
          <div className="error">{useValidate(errors.message)}</div>
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
      </div>
    </FormWrapper>
  )
}
export default ReviewForm
