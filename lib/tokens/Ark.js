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

var SvgArk = function SvgArk(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      fill: "currentcolor",
      height: props.size,
      width: props.size
    }),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "#F70000"
    }),
    _react2.default.createElement("path", {
      d: "M11.96 10.01l-8.21 8.658L11.997 5.25l8.253 13.5-8.29-8.74zm1.191 3.439h-2.566l1.32-1.452 1.246 1.465v-.013zm-4.95 2.383v-.018l1.456-1.49v-.007l4.44-.019 1.498 1.534H8.203z",
      fill: "white"
    })
  );
};

SvgArk.displayName = "SvgArk";
SvgArk.defaultProps = {
  size: 24,
  color: "#F70000"
};
exports.default = SvgArk;