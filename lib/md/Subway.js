"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgSubway = function SvgSubway(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), _react2["default"].createElement("path", {
    fill: "none",
    d: "M0 0v24h24V0H0zm22 22H2V8.86C2 6.05 3.53 3.84 6.2 2.8 8 2.09 10.14 2 12 2c1.86 0 4 .09 5.8.8C20.47 3.84 22 6.05 22 8.86V22z"
  }), _react2["default"].createElement("circle", {
    cx: 15.5,
    cy: 16,
    r: 1
  }), _react2["default"].createElement("circle", {
    cx: 8.5,
    cy: 16,
    r: 1
  }), _react2["default"].createElement("path", {
    d: "M7.01 9h10v5h-10z"
  }), _react2["default"].createElement("path", {
    d: "M17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z"
  }));
};

SvgSubway.displayName = "SvgSubway";
SvgSubway.defaultProps = {
  size: 24,
  color: "inherit"
};
exports["default"] = SvgSubway;