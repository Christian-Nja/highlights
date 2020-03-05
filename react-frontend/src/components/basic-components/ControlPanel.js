"use strict";
/**
 * Component accept and stores document to be parsed and send them to rst-service
 * saliency extractor.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var axios_1 = require("axios");
var ControlPanel = /** @class */ (function (_super) {
    __extends(ControlPanel, _super);
    function ControlPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.render = function () {
            return (React.createElement("div", { className: "columnContainer" },
                React.createElement("textarea", { id: "textInput", value: _this.state.text, onChange: _this.handleTextChange }),
                React.createElement("button", { className: "button", onClick: _this.handleClick }, "Parse")));
        };
        /**
         * Function check if a document file is loaded or text is written and in positive case
         * calls parseDocument
         */
        _this.handleClick = function () {
            _this.axiosGetTest();
        };
        /**
         * Function sends request to rst-service microservice to extract saliency.
         */
        _this.parseDocument = function () { };
        _this.handleTextChange = function (event) {
            _this.setState({ text: event.target.value });
        };
        _this.axiosGetTest = function () {
            axios_1["default"]({
                method: "get",
                url: "http://localhost/test-get",
                responseType: "stream"
            }).then(function (response) {
                console.log(response);
            });
        };
        _this.state = {
            text: ""
        };
        return _this;
    }
    return ControlPanel;
}(React.Component));
exports["default"] = ControlPanel;
