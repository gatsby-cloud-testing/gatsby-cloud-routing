import * as React from "react"

const Message = ({ pageContext }) => {
  const { message } = pageContext
  const isBrowser = typeof window !== "undefined"

  return (
    <>
      <h1>{message}</h1>
      <h1>{`window.location.pathname: ${
        isBrowser && window.location.pathname
      }`}</h1>
    </>
  )
}

export default Message
