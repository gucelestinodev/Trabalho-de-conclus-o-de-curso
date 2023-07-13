import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IconIniciar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 16 16",
      width: "65%",  // Adicionado
      height: "65%", // Adicionado
      marginTop: 8,
      marginLeft: -16
    }}
    viewBox="0 0 16 16"
    {...props}
  >
    <Path
      d="m3 16 10-8L3 0v16z"
      style={{
        fill: "#030104",
      }}
    />
  </Svg>
)
export default IconIniciar
