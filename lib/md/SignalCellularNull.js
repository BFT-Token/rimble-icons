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

var SvgSignalCellularNull = function SvgSignalCellularNull(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    _react2.default.createElement("path", { d: "M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

SvgSignalCellularNull.displayName = "SvgSignalCellularNull";
SvgSignalCellularNull.defaultProps = {
  size: 24
};
exports.default = SvgSignalCellularNull;