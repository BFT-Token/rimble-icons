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

var SvgSignalCellular3Bar = function SvgSignalCellular3Bar(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), _react2["default"].createElement("path", {
    fillOpacity: 0.3,
    d: "M2 22h20V2z"
  }), _react2["default"].createElement("path", {
    d: "M17 7L2 22h15z"
  }));
};

SvgSignalCellular3Bar.displayName = "SvgSignalCellular3Bar";
SvgSignalCellular3Bar.defaultProps = {
  size: 24,
  color: "inherit"
};
exports["default"] = SvgSignalCellular3Bar;