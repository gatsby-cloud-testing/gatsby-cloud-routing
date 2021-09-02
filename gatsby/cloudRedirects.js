const redirects = [
  {
    fromPath: "/case-1",
    toPath: "/temporary-non-trailing-slash",
  },
  {
    fromPath: "/case-2",
    toPath: "/temporary-trailing-slash/",
  },
  {
    fromPath: "/case-3",
    toPath: "/permanent-non-trailing-slash",
    isPermanent: true,
  },
  {
    fromPath: "/case-4",
    toPath: "/permanent-trailing-slash/",
    isPermanent: true,
  },
  {
    fromPath: "/case-5/*",
    toPath: "/wildcard-temporary-non-trailing-slash",
  },
  {
    fromPath: "/case-6/*",
    toPath: "/wildcard-temporary-trailing-slash/",
  },
  {
    fromPath: "/case-7/*",
    toPath: "/wildcard-permanent-non-trailing-slash",
    isPermanent: true,
  },
  {
    fromPath: "/case-8/*",
    toPath: "/wildcard-permanent-trailing-slash/",
    isPermanent: true,
  },
  {
    fromPath: "/case-9",
    toPath: "/redirect-when-page-exists",
  },
]

module.exports = { redirects }
