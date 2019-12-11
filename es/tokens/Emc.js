var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgEmc = function SvgEmc(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#B49FFC",
      height: props.size,
      width: props.size
    }),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 6v2.4h4.8v2.4H6v2.4h7.2V8.4h2.4v7.2H6V18h12V6H6z",
      fill: "white"
    })
  );
};

SvgEmc.displayName = "SvgEmc";
SvgEmc.defaultProps = {
  size: 24
};
export default SvgEmc;