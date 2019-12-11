var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgLaptop = function SvgLaptop(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "laptop_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "laptop_svg__b" },
      React.createElement("use", { xlinkHref: "#laptop_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#laptop_svg__b)",
      d: "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
    })
  );
};

SvgLaptop.displayName = "SvgLaptop";
SvgLaptop.defaultProps = {
  size: 24
};
export default SvgLaptop;