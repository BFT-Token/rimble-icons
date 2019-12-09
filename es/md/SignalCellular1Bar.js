var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSignalCellular1Bar = function SvgSignalCellular1Bar(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("path", { fillOpacity: 0.3, d: "M2 22h20V2z" }),
    React.createElement("path", { d: "M12 12L2 22h10z" })
  );
};

export default SvgSignalCellular1Bar;