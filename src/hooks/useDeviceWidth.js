export const useDeviceWidth = () => {
  const deviceWidth = window.innerWidth
  if (deviceWidth < 480) {
    return true
  } else {
    return false
  }
}
