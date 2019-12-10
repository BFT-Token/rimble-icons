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

var SvgBela = function SvgBela(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#13A0F6",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.223 8.676a1.817 1.817 0 01-.973-1.61 1.812 1.812 0 113.415-.85 6.668 6.668 0 013.376-.912c3.704 0 6.709 3.01 6.709 6.723s-3.004 6.723-6.71 6.723c-3.705 0-6.709-3.01-6.709-6.723a6.705 6.705 0 01.892-3.351zm5.817 6.659c1.823 0 3.3-1.481 3.3-3.308a3.304 3.304 0 00-3.3-3.307 3.304 3.304 0 00-3.3 3.307 3.304 3.304 0 003.3 3.308z",
      fill: "white"
    })
  );
};

SvgBela.displayName = "SvgBela";
SvgBela.defaultProps = {
  size: 24
};
exports.default = SvgBela;