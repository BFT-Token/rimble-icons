var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgVerticalAlignTop = function SvgVerticalAlignTop(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement("path", { d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" }),
    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

SvgVerticalAlignTop.displayName = "SvgVerticalAlignTop";
SvgVerticalAlignTop.defaultProps = {
  size: 24
};
export default SvgVerticalAlignTop;