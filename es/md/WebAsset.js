var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgWebAsset = function SvgWebAsset(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    React.createElement("path", {
      fill: "#010101",
      d: "M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm0 14H5V8h14v10z"
    })
  );
};

SvgWebAsset.displayName = "SvgWebAsset";
SvgWebAsset.defaultProps = {
  size: 24
};
export default SvgWebAsset;