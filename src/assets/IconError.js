import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IconError = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 512 512"
    {...props}
  >
    <Path d="M79.7 79.8 0 159.5v97l.1 97 79.8 79.2 79.9 79.3h192.4l79.9-79.2 79.8-79.3.1-97v-97l-79.8-79.8L352.5 0h-193L79.7 79.8zm331 21.4 71.3 71.3v168.3l-71.1 70.6-71.1 70.6H172.2l-71.1-70.6L30 340.8V172.5l71.2-71.2L172.5 30h167l71.2 71.2z" />
    <Path d="M211 196.5V302h90V91h-90v105.5zm60 0V272h-30V121h30v75.5zM211 377v45h90v-90h-90v45zm60 0v15h-30v-30h30v15z" />
  </Svg>
)
export default IconError
