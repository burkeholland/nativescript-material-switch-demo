var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="demo/app/references.d.ts" />
var view = require("ui/core/view");
var MaterialSwitch = (function (_super) {
    __extends(MaterialSwitch, _super);
    function MaterialSwitch() {
        _super.call(this);
        this._ios = JTMaterialSwitch.alloc().init();
        this._ios.center = CGPointMake(200, 200);
    }
    Object.defineProperty(MaterialSwitch.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return MaterialSwitch;
})(view.View);
exports.MaterialSwitch = MaterialSwitch;
