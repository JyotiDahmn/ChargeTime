import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M15.529.961C14.559.555 13.589.4 12.619.4 9.539.4 6.46 1.958 3.38 1.958a7.585 7.585 0 0 1-2.316-.343.855.855 0 0 0-.259-.04A.796.796 0 0 0 0 2.37v7.932c0 .315.18.615.471.736.97.407 1.94.562 2.91.562 3.08 0 6.159-1.559 9.238-1.559.772 0 1.544.098 2.316.343.087.028.174.04.259.04.43 0 .806-.332.806-.795V1.7A.796.796 0 0 0 15.53.96ZM1.2 2.905a8.7 8.7 0 0 0 1.568.224A1.602 1.602 0 0 1 1.2 4.417V2.905Zm0 7.125V8.836a1.6 1.6 0 0 1 1.593 1.535 6.036 6.036 0 0 1-1.593-.34ZM8 8.4C6.895 8.4 6 7.325 6 6c0-1.326.896-2.4 2-2.4s2 1.074 2 2.4c0 1.326-.896 2.4-2 2.4Zm6.8.694a8.597 8.597 0 0 0-1.358-.21A1.597 1.597 0 0 1 14.8 7.65v1.443Zm0-5.902a1.597 1.597 0 0 1-1.395-1.54 6.01 6.01 0 0 1 1.395.317v1.223Z"
    />
  </Svg>
)
export { SvgComponent as PlanPricing }