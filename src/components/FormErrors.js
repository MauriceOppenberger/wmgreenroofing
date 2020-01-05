import React from "react"

const FormErrors = ({ formErrors }) => {
  console.log(formErrors)
  return (
    <div className="formErrors">
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName] !== null) {
          return (
            <p key={i}>
              {fieldName} {formErrors[fieldName]}
            </p>
          )
        } else {
          return ""
        }
      })}
    </div>
  )
}
export default FormErrors
