"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgLinearScale = function SvgLinearScale(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", height: props.size, width: props.size }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { id: "linearScale_svg__a", d: "M0 0h24v24H0V0z" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "linearScale_svg__b" },
      _react2.default.createElement("use", { xlinkHref: "#linearScale_svg__a", overflow: "visible" })
    ),
    _react2.default.createElement("path", {
      clipPath: "url(#linearScale_svg__b)",
      d: "M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5a2.5 2.5 0 000 5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5a2.5 2.5 0 000-5z"
    })
  );
};

exports.default = SvgLinearScale;