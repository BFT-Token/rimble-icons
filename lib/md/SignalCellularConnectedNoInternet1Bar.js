"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = (0, _styledComponents2.default)("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgSignalCellularConnectedNoInternet1Bar = function SvgSignalCellularConnectedNoInternet1Bar(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    _react2.default.createElement("path", { fillOpacity: 0.3, d: "M22 8V2L2 22h16V8z" }),
    _react2.default.createElement("path", { d: "M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" })
  );
};

SvgSignalCellularConnectedNoInternet1Bar.displayName = "SvgSignalCellularConnectedNoInternet1Bar";
SvgSignalCellularConnectedNoInternet1Bar.defaultProps = {
  size: 24,
  color: "inherit"
};
exports.default = SvgSignalCellularConnectedNoInternet1Bar;