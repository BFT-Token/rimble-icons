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

var SvgIcx = function SvgIcx(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#1FC5C9",
      height: props.size,
      width: props.size
    }),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.472 16.854l1.623-1.623a3.75 3.75 0 005.136-5.136l1.623-1.623a6 6 0 01-8.382 8.382zm-1.326-1.326a6 6 0 018.382-8.382l-1.623 1.623a3.75 3.75 0 00-5.136 5.136l-1.623 1.623zM18 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-12 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3z",
      fill: "white"
    })
  );
};

SvgIcx.displayName = "SvgIcx";
SvgIcx.defaultProps = {
  size: 24
};
exports.default = SvgIcx;