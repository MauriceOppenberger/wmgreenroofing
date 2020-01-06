import React from "react"
import FormWrapper from "./Styles/FormStyles"

const ReviewForm = () => {
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
        >
          <input type="hidden" name="form-name" value="review" />
          <p class="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message:
              <textarea type="text" name="message" placeholder="Your Review" />
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>

          <button type="submit" value="Send" className="btn__submit btn">
            Submit
          </button>
        </form>
      </div>
    </FormWrapper>
  )
}
export default ReviewForm
