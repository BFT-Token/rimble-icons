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

var SvgLrc = function SvgLrc(props) {
  return _react2.default.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#2AB6F6",
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
      d: "M12 4.5l6.75 9.4L12 19.5l-6.75-5.6L12 4.5zm-.88 5l-2.935 4 2.934 2.4V9.5zm1.76 0v6.4l2.935-2.4-2.934-4z",
      fill: "white"
    })
  );
};

SvgLrc.displayName = "SvgLrc";
SvgLrc.defaultProps = {
  size: 24
};
exports.default = SvgLrc;