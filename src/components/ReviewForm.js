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
        <form action="#" method="POST" className="review__form">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea type="text" name="message" placeholder="Your Review" />
          </label>

          <button type="submit" value="Send" className="btn__submit btn">
            Submit
          </button>
        </form>
      </div>
    </FormWrapper>
  )
}
export default ReviewForm
