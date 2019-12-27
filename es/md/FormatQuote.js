var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgFormatQuote = function SvgFormatQuote(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    React.createElement("path", { d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" })
  );
};

SvgFormatQuote.displayName = "SvgFormatQuote";
SvgFormatQuote.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgFormatQuote;