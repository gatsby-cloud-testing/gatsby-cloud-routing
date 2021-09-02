const redirects = [
  {
    fromPath: "/case-5",
    toPath: "/temporary-non-trailing-slash",
  },
  {
    fromPath: "/case-6",
    toPath: "/temporary-trailing-slash/",
  },
  {
    fromPath: "/case-7",
    toPath: "/permanent-non-trailing-slash",
    isPermanent: true,
  },
  {
    fromPath: "/case-8",
    toPath: "/permanent-trailing-slash/",
    isPermanent: true,
  },
  {
    fromPath: "/case-9/*",
    toPath: "/wildcard-temporary-non-trailing-slash",
  },
  {
    fromPath: "/case-10/*",
    toPath: "/wildcard-temporary-trailing-slash/",
  },
  {
    fromPath: "/case-11/*",
    toPath: "/wildcard-permanent-non-trailing-slash",
    isPermanent: true,
  },
  {
    fromPath: "/case-12/*",
    toPath: "/wildcard-permanent-trailing-slash/",
    isPermanent: true,
  },
  {
    fromPath: "/case-13/redirect-to-existing-page",
    toPath: "/case-1",
  },
]

module.exports = { redirects }
