import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Close = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}
  >
    <Path d="M0 1.2c0 .7 1.7 2.9 3.7 5L7.4 10l-3.7 3.8c-6.4 6.5-4 8.9 2.5 2.5l3.8-3.7 3.8 3.7c6.5 6.4 8.9 4 2.5-2.5L12.6 10l3.7-3.8c6.4-6.5 4-8.9-2.5-2.5L10 7.4 6.2 3.7C2.4 0 0-1 0 1.2z" />
  </Svg>
)
export default Close
