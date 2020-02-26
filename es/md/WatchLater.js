function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgWatchLater = function SvgWatchLater(props) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "watchLater_svg__a",
    d: "M0 0h24v24H0V0z"
  })), React.createElement("clipPath", {
    id: "watchLater_svg__b"
  }, React.createElement("use", {
    xlinkHref: "#watchLater_svg__a",
    overflow: "visible"
  })), React.createElement("path", {
    clipPath: "url(#watchLater_svg__b)",
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
  }));
};

SvgWatchLater.displayName = "SvgWatchLater";
SvgWatchLater.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgWatchLater;