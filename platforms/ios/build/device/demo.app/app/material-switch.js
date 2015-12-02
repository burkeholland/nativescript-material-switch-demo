var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view = require("ui/core/view");
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var isOnProperty = new dependencyObservable.Property("isOn", "MaterialSwitch", new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.None));
var isEnabledProperty = new dependencyObservable.Property("isEnabled", "MaterialSwitch", new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.None));
function onIsOnChanged(data) {
    var m = data.object;
    m._onIsOnChanged(data);
}
function onIsEnabledChanged(data) {
    var m = data.object;
    m._onIsEnabledChanged(data);
}
isOnProperty.metadata.onSetNativeValue = onIsOnChanged;
isOnProperty.metadata.onSetNativeValue = onIsEnabledChanged;
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
    Object.defineProperty(MaterialSwitch.prototype, "isOn", {
        get: function () {
            return this._getValue(MaterialSwitch.isOnProperty);
        },
        set: function (value) {
            this._setValue(MaterialSwitch.isOnProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    MaterialSwitch.prototype._onIsOnChanged = function (data) {
        this._ios.isOn = data.newValue;
    };
    Object.defineProperty(MaterialSwitch.prototype, "isEnabled", {
        get: function () {
            return this._getValue(MaterialSwitch.isEnabledProperty);
        },
        set: function (value) {
            this._setValue(MaterialSwitch.isEnabledProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    MaterialSwitch.prototype._onIsEnabledChanged = function (data) {
        this._ios.isEnabled = data.newValue;
    };
    MaterialSwitch.isOnProperty = isOnProperty;
    MaterialSwitch.isEnabledProperty = isEnabledProperty;
    return MaterialSwitch;
})(view.View);
exports.MaterialSwitch = MaterialSwitch;
