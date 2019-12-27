var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgGif = function SvgGif(props) {
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
      React.createElement("path", { id: "gif_svg__a", d: "M24 24H0V0h24v24z" })
    ),
    React.createElement(
      "clipPath",
      { id: "gif_svg__b" },
      React.createElement("use", { xlinkHref: "#gif_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      d: "M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z",
      clipPath: "url(#gif_svg__b)"
    })
  );
};

SvgGif.displayName = "SvgGif";
SvgGif.defaultProps = {
  size: 24
};
export default SvgGif;