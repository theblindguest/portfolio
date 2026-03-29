import 'styled-components'
import { ThemeInterface } from '../src/styles/themes'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
