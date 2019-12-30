export const getSlug = (url, wpurl) => {
  if (!url) {
    return
  }
  return url.replace(wpurl, ``)
}
