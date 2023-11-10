import { useMediaQuery } from 'react-responsive'

const getBreakpoints = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 993px)' })
  const isDevice = useMediaQuery({ query: '(max-width: 992px)' })

  return { isDesktop, isDevice }
}

export default getBreakpoints
