import { useMediaQuery } from 'react-responsive'

const getBreakpoints = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 993px)' })
  const isDevice = useMediaQuery({ query: '(max-width: 992px)' })
  const tabletDesktopNav = useMediaQuery({ query: '(min-width: 929px)' })
  const isMomentBig = useMediaQuery({ query: '(max-width: 720px)' })

  return { isDesktop, isDevice, tabletDesktopNav, isMomentBig }
}

export default getBreakpoints
