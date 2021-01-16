import React from "react"

export const useValidate = errorField => {
  if (errorField) {
    const { name } = errorField.ref
    const { type } = errorField
    switch (name) {
      case "name":
        if (type === "required") {
          return <p className="err"> this field is required</p>
        }
        if (type === "minLength") {
          return (
            <p className="warn">
              this field requires a minimum of 2 characters
            </p>
          )
        }
        break
      case "email":
        if (type === "required") {
          return <p className="err">this field is required</p>
        }
        if (type === "pattern") {
          return <p className="warn">this is not a valid email address</p>
        }
        break
      case "phone":
        if (type === "required") {
          return <p className="err">this field is required</p>
        }
        break
      case "postal":
        if (type === "pattern") {
          return <p className="warn">this is not a valid postal address</p>
        }
        break
      case "message":
        if (type === "required") {
          return <p className="err">this field is required</p>
        }
        if (type === "minLength") {
          return (
            <p className="warn">
              this field requires a minimum of 25 characters
            </p>
          )
        }
        break
      case "roofTyp":
        if (type === "required") {
          return <p className="err">this field is required</p>
        }
        break

      default:
        break
    }
  } else {
    return
  }
}
