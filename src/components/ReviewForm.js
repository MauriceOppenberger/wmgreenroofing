import React from "react"
import FormWrapper from "./Styles/FormStyles"
import { navigateTo } from "gatsby-link"

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

function encode(data) {
  console.log("encode:", data)
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const ReviewForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => console.log("Thank you for submission"))
      .catch(error => alert(error))
  }
  console.log("state:", state)
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
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="review" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Name:
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <textarea
                type="text"
                name="message"
                placeholder="Your Review"
                onChange={handleChange}
              />
            </label>
          </p>

          <button type="submit" value="Send" className="btn__submit btn">
            Submit
          </button>
        </form>
      </div>
    </FormWrapper>
  )
}
export default ReviewForm
