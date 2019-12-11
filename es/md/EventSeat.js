var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgEventSeat = function SvgEventSeat(props) {
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
      React.createElement("path", { id: "eventSeat_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "eventSeat_svg__b" },
      React.createElement("use", { xlinkHref: "#eventSeat_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      d: "M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z",
      clipPath: "url(#eventSeat_svg__b)"
    })
  );
};

SvgEventSeat.displayName = "SvgEventSeat";
SvgEventSeat.defaultProps = {
  size: 24
};
export default SvgEventSeat;