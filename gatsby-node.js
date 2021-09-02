const path = require(`path`)
const { redirects } = require("./gatsby/cloudRedirects")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  redirects.forEach(r => {
    createRedirect(r)
    createPage({
      path: r.toPath,
      component: path.resolve("./src/templates/to-path.js"),
      context: r,
    })
  })
}
