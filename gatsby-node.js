const path = require(`path`)
const { redirects } = require("./gatsby/cloudRedirects")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions
  const toPathTemplate = path.resolve("./src/templates/to-path.js")
  const messageTemplate = path.resolve("./src/templates/message.js")

  createPage({
    path: "/case-3",
    component: messageTemplate,
    context: {
      message:
        "Path = `/case-3` \nThis page was created in gatsby-node.js using the createPage action",
    },
  })

  createPage({
    path: "/case-4/",
    component: messageTemplate,
    context: {
      message:
        "Path = `/case-4/` \nThis page was created in gatsby-node.js using the createPage action",
    },
  })

  redirects.forEach((r, index) => {
    // only createPage for cases 5 through 12
    if (index <= 12 - 5) {
      createPage({
        path: r.toPath,
        component: toPathTemplate,
        context: r,
      })
    }
    createRedirect(r)
  })
}
