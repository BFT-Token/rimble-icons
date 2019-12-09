var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgFlightTakeoff = function SvgFlightTakeoff(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "flightTakeoff_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "flightTakeoff_svg__b" },
      React.createElement("use", { xlinkHref: "#flightTakeoff_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      d: "M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z",
      clipPath: "url(#flightTakeoff_svg__b)"
    }),
    React.createElement("path", {
      clipPath: "url(#flightTakeoff_svg__b)",
      fill: "none",
      d: "M0 0h24v24H0V0z"
    })
  );
};

export default SvgFlightTakeoff;