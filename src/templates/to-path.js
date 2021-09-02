import * as React from "react"

const ToPath = ({ pageContext }) => {
  const { fromPath, toPath, isPermanent } = pageContext
  const isBrowser = typeof window !== "undefined"

  return (
    <>
      <h1>{`fromPath: ${fromPath}`}</h1>
      <h1>{`toPath: ${toPath}`}</h1>
      <h1>{`isPermanent: ${isPermanent ? isPermanent : false}`}</h1>
      <h1>{`window.location.pathname: ${
        isBrowser && window.location.pathname
      }`}</h1>
    </>
  )
}

export default ToPath
