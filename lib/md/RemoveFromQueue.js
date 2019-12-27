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

var SvgRemoveFromQueue = function SvgRemoveFromQueue(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), _react2["default"].createElement("defs", null, _react2["default"].createElement("path", {
    id: "removeFromQueue_svg__a",
    d: "M0 0h24v24H0V0z"
  })), _react2["default"].createElement("clipPath", {
    id: "removeFromQueue_svg__b"
  }, _react2["default"].createElement("use", {
    xlinkHref: "#removeFromQueue_svg__a",
    overflow: "visible"
  })), _react2["default"].createElement("path", {
    clipPath: "url(#removeFromQueue_svg__b)",
    d: "M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"
  }));
};

SvgRemoveFromQueue.displayName = "SvgRemoveFromQueue";
SvgRemoveFromQueue.defaultProps = {
  size: 24,
  color: "inherit"
};
exports["default"] = SvgRemoveFromQueue;