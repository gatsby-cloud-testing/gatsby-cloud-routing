const path = require(`path`)
const { redirects } = require("./gatsby/cloudRedirects")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions
  const toPathTemplate = path.resolve("./src/templates/to-path.js")
  redirects.forEach(r => {
    createRedirect(r)
    createPage({
      path: r.toPath,
      component: toPathTemplate,
      context: r,
    })
  })

  createPage({
    path: "/case-11",
    component: toPathTemplate,
  })

  createPage({
    path: "/case-12/",
    component: toPathTemplate,
  })
}
