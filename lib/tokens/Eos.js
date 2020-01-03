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

var SvgEos = function SvgEos(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    d: "M8.164 8.707L12 20.75l-5.691-3.565 1.855-8.478L12 3.468v3.675L6.309 17.185h11.387l-5.69-10.042V3.468l3.834 5.24 1.856 8.477-5.69 3.565L15.84 8.707",
    stroke: "white",
    strokeWidth: 0.64,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

SvgEos.displayName = "SvgEos";
SvgEos.defaultProps = {
  size: 24,
  color: "black"
};
exports["default"] = SvgEos;