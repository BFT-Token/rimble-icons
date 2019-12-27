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

var SvgSignalWifiStatusbarConnectedNoInternet26X24Px = function SvgSignalWifiStatusbarConnectedNoInternet26X24Px(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), _react2["default"].createElement("path", {
    fillOpacity: 0.3,
    d: "M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"
  }), _react2["default"].createElement("path", {
    d: "M22 22h2v-2h-2v2zm0-12v8h2v-8h-2z"
  }));
};

SvgSignalWifiStatusbarConnectedNoInternet26X24Px.displayName = "SvgSignalWifiStatusbarConnectedNoInternet26X24Px";
SvgSignalWifiStatusbarConnectedNoInternet26X24Px.defaultProps = {
  size: 24,
  color: "inherit"
};
exports["default"] = SvgSignalWifiStatusbarConnectedNoInternet26X24Px;