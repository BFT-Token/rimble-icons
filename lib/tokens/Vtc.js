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

var SvgVtc = function SvgVtc(props) {
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
      fill: "#048657"
    }),
    _react2.default.createElement("path", {
      d: "M1.974 12.428l1.463-1.666H8.64l3.197 4.078 8.366-11.59c.514.464.981.976 1.396 1.53.43.573.804 1.185 1.122 1.835L12.449 20.822c-.194.204-.398.306-.612.306-.214 0-.43-.102-.646-.306l-6.496-8.395H1.974z",
      fill: "white"
    })
  );
};

SvgVtc.displayName = "SvgVtc";
SvgVtc.defaultProps = {
  size: 24,
  color: "#048657"
};
exports.default = SvgVtc;