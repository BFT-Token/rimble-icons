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

var SvgGif = function SvgGif(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "gif_svg__a", d: "M24 24H0V0h24v24z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "gif_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#gif_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      d: "M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z",
      clipPath: "url(#gif_svg__b)"
    })
  );
};

SvgGif.displayName = "SvgGif";
SvgGif.defaultProps = {
  size: 24
};
exports.default = SvgGif;