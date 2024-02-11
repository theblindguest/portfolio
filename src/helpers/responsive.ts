import { useMediaQuery } from 'react-responsive'

const getBreakpoints = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 993px)' })
  const isDevice = useMediaQuery({ query: '(max-width: 992px)' })
  const tabletDesktopNav = useMediaQuery({ query: '(min-width: 929px)' })
  const isDesktopMoment = useMediaQuery({ query: '(min-width: 640px)' })
  const isDesktopAbout = useMediaQuery({ query: '(min-width: 540px)' })

  return {
    isDesktop,
    isDevice,
    tabletDesktopNav,
    isDesktopMoment,
    isDesktopAbout
  }
}

export default getBreakpoints
