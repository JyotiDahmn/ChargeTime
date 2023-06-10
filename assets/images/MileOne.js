import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={24}
    fill="none"
    {...props}
  >
    <G stroke="#000" strokeWidth={0.25} clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M.939 11c-.156 2.414.256 4.549 1.221 6.407.966 1.858 2.488 3.447 4.565 4.762 1.446.917 3.065 1.432 4.788 1.634L.939 11Zm0 0c.109-1.682.628-3.258 1.48-4.726M.94 11l1.48-4.726m0 0C5.036 1.768 10.137-.61 15.343.422c4.778.947 7.891 3.803 9.394 8.328M2.419 6.274 24.737 8.75m0 0c.248.749.354 1.53.452 2.324m-.452-2.324.452 2.324M12.439 1.82a22.065 22.065 0 0 0-.004 1.015h.001v.428c-.002.289-.003.575.002.862a.383.383 0 0 1-.079.266c-.065.076-.16.106-.259.118-1.33.16-2.545.615-3.62 1.39-1.746 1.259-2.812 2.926-3.134 5.021-.331 2.157.205 4.105 1.583 5.817 1.262 1.567 2.917 2.522 4.945 2.808l-.017.124.017-.124c2.663.376 4.942-.405 6.816-2.271 1.147-1.142 1.828-2.527 2.065-4.115l.124.018a1.12 1.12 0 0 1 .015-.08L12.44 1.82Zm0 0c.003-.113-.014-.233-.102-.313-.09-.08-.212-.084-.326-.066l.428.38ZM3.832 6.353c1.715-2.586 4.146-4.183 7.252-4.778l.024.123-7.276 4.655Zm0 0C2.568 8.26 2.019 10.37 2.147 12.644m1.685-6.29-1.685 6.29m0 0c.103 1.814.612 3.517 1.644 5.03 2.49 3.658 6.011 5.337 10.509 4.938 2.18-.193 4.09-1.062 5.762-2.421l-.079-.097-17.836-7.45ZM13.66 1.751c.002.809.002 1.618 0 2.427 0 .077.018.16.075.224.058.066.14.093.222.1a1.09 1.09 0 0 1 .133.02c.03.006.063.012.096.016 2.019.3 3.664 1.232 4.948 2.772.924 1.107 1.461 2.381 1.65 3.795.015.11.05.21.134.277a.435.435 0 0 0 .287.074c.27-.006.54-.005.812-.003H22.708c.297 0 .593-.001.889.001.08 0 .178-.01.25-.076.078-.072.09-.173.08-.269-.096-.934-.29-1.85-.63-2.732-.78-2.03-2.072-3.69-3.873-4.963-1.62-1.144-3.436-1.787-5.422-1.973-.088-.008-.184.002-.255.069-.07.066-.087.16-.087.24Zm0 0h.125-.125Zm11.529 9.323v1.944c-.02.139-.038.275-.055.41-.036.293-.072.578-.137.86-1.076 4.654-3.944 7.706-8.61 9.16-.755.235-1.542.333-2.34.427H12.05l-.169-.023a15.465 15.465 0 0 0-.368-.049l13.676-12.73Zm-1.604 1.564v.125l.282-.022c-.071-.083-.178-.103-.282-.103ZM13.032 18.43c3.615.02 6.55-2.826 6.561-6.373l-12.966-.03h-.125c-.028 3.525 2.894 6.383 6.53 6.403Z"
      />
      <Path
        fill="url(#c)"
        d="M12.933 8.234v-.002c-.157 0-.267 0-.348.009-.083.009-.108.025-.117.033-.007.007-.023.028-.03.105a2.86 2.86 0 0 0 .003.34l-.125.005c.013.321-.078.485-.399.628l1.016-1.118Zm0 0h.125m-.125 0h.125m-.062 2.1-.001-.125c.552-.002 1.039.196 1.483.453.067.039.093.039.097.039a.064.064 0 0 0 .012-.012.372.372 0 0 0 .043-.071c.128-.254.264-.504.406-.749a.228.228 0 0 0 .027-.06.05.05 0 0 0 .001-.01v-.002l-.001-.002a.062.062 0 0 0-.009-.01.264.264 0 0 0-.059-.038 4.342 4.342 0 0 0-.99-.39.465.465 0 0 1-.272-.153.429.429 0 0 1-.076-.302l.125.008-1.202 1.372m.416.052c-.13 0-.254.024-.375.066m.375-.066c.52-.002.984.185 1.42.436m-1.42-.436 1.42.436m-1.795-.37-.041-.118m.04.118-.04-.118m.04.118c-.153.053-.261.143-.278.315m.238-.433a.593.593 0 0 0-.24.145.453.453 0 0 0-.122.275l.124.013m0 0c-.017.17.036.308.185.401m-.185-.401-.124-.013m.31.414-.31-.414m.31.414-.067.106c.208.13.442.196.655.255l.067.019.034-.12m-.69-.26.656.38m-.655-.38c.191.12.408.18.623.241l.066.019m-.69-.26-.066.106a.508.508 0 0 1-.243-.52m0 0 2.223 1.073m-1.224-.4-.034.12m.034-.12.142.04c.366.104.733.207 1.082.36m-1.258-.28.142.041c.367.104.725.205 1.066.353m-1.208-.393 1.258.279m0 0-.05.114m.05-.114-.05.114m.05-.114c.706.308 1 .856.968 1.59-.028.679-.455 1.241-1.126 1.483m.108-2.959c.333.146.56.344.703.585.143.242.205.537.19.887-.026.624-.417 1.144-1.043 1.37m0 0 .042.117m-.042-.117-.003.001c-.121.044-.22.08-.296.116a.48.48 0 0 0-.196.15.48.48 0 0 0-.076.235c-.009.08-.01.18-.01.301v.016h.124m.457-.82.042.118m0 0c-.494.179-.494.18-.499.692v.01m0 0h-.125m.125 0c-.002.283.018.413-.037.473-.057.06-.19.05-.502.051h-.247c-.142-.002-.283-.004-.423.002-.192.007-.279-.06-.268-.257m1.352-.27-2.668-4.492c.007.34.112.591.284.788.175.2.426.35.734.474.233.094.471.164.716.237.09.027.181.053.273.082l.105.032c.222.066.469.14.678.294.147.108.252.27.218.483-.034.217-.19.337-.373.386a1.41 1.41 0 0 1-.282.05l-.007-.125m.322 1.792.001.189c.001.05.002.09 0 .129a.35.35 0 0 1-.006.069m.005-.387-.005.386m-1.347-.117.125.007c.006-.11.005-.22.003-.324v-.022a5.327 5.327 0 0 1 0-.286l-.124-.005m-.004.63c.007-.113.005-.225.003-.338-.001-.097-.003-.195.001-.292m-.004.63.125.007c-.005.083.014.102.017.105.007.007.034.023.12.02l-.258-.762m0 0c.007-.169-.061-.25-.235-.29a4.981 4.981 0 0 1-1.27-.472c-.155-.083-.2-.172-.107-.335m0 0 .108.063-.109-.063Zm0 0c.143-.25.275-.509.398-.77m0 0Zm0 0c.081-.173.157-.205.34-.097.58.344 1.202.574 1.9.533m0 0c.086-.006.173-.023.257-.046m-.257.046.257-.046m0 0c.15-.04.258-.13.282-.284l-.282.284Zm1.55-3.78c.081-.14.054-.222-.092-.297l.092.296Zm0 0c-.14.243-.276.49-.402.742-.079.157-.15.198-.326.096m.728-.838-.728.838m-.762 5.167.005-.002s-.002 0-.004.003l-.003.004.002-.005Zm-.596-7.703h.158c.123.001.248.002.372-.001m-.53 0h.53m0 0c.045-.001.06.007.063.008m-.063-.008.063.008m0 0Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={13.048}
        x2={13.048}
        y1={0.058}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B1D34F" />
        <Stop offset={1} stopColor="#50AC3D" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={13.031}
        x2={13.031}
        y1={8.107}
        y2={16.076}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B1D34F" />
        <Stop offset={1} stopColor="#50AC3D" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.686 0h24.628v24H.686z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export { SvgComponent as MileOne }