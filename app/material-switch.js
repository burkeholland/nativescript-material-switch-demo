var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view = require("ui/core/view");
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var formattedString = require("text/formatted-string");
// isOn
var isOnProperty = new dependencyObservable.Property("isOn", "MaterialSwitch", new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout));
function onIsOnChanged(data) {
    var m = data.object;
    m._onIsOnChanged(data);
}
isOnProperty.metadata.onSetNativeValue = onIsOnChanged;
// isEnabled
var isEnabledProperty = new dependencyObservable.Property("isEnabled", "MaterialSwitch", new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.None));
function onIsEnabledChanged(data) {
    var m = data.object;
    m._onIsEnabledChanged(data);
}
isEnabledProperty.metadata.onSetNativeValue = onIsEnabledChanged;
// isBounceEnabled
var isBounceEnabledProperty = new dependencyObservable.Property("isBounceEnabled", "MaterialSwitch", new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.None));
function onIsBounceEnabledChanged(data) {
    var m = data.object;
    m._onIsBounceEnabledChanged(data);
}
isEnabledProperty.metadata.onSetNativeValue = onIsBounceEnabledChanged;
// isRippleEnabled
var isRippleEnabledProperty = new dependencyObservable.Property("isRippleEnabled", "MaterialSwitch", new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.None));
function onIsRippleEnabledChanged(data) {
    var m = data.object;
    m._onIsRippleEnabledChanged(data);
}
isEnabledProperty.metadata.onSetNativeValue = onIsRippleEnabledChanged;
var MaterialSwitch = (function (_super) {
    __extends(MaterialSwitch, _super);
    function MaterialSwitch() {
        _super.call(this);
        this._ios = JTMaterialSwitch.alloc().init();
    }
    Object.defineProperty(MaterialSwitch.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialSwitch.prototype, "isOn", {
        // isOn
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
        // isEnabled
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
        console.log("Is Enabled Changed");
        this._ios.isEnabled = data.newValue;
    };
    Object.defineProperty(MaterialSwitch.prototype, "isBounceEnabled", {
        // isBounceEnabled
        get: function () {
            return this._getValue(MaterialSwitch.isBounceEnabledProperty);
        },
        set: function (value) {
            this._setValue(MaterialSwitch.isBounceEnabledProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    MaterialSwitch.prototype._onIsBounceEnabledChanged = function (data) {
        this._ios.isBounceEnabled = data.newValue;
    };
    Object.defineProperty(MaterialSwitch.prototype, "isRippleEnabled", {
        // isRippleEnabled
        get: function () {
            return this._getValue(MaterialSwitch.isRippleEnabled);
        },
        set: function (value) {
            this._setValue(MaterialSwitch.isRippleEnabled, value);
        },
        enumerable: true,
        configurable: true
    });
    MaterialSwitch.prototype._onIsRippleEnabledChanged = function (data) {
        this._ios.isRippleEnabled = data.newValue;
    };
    MaterialSwitch.prototype._addChildFromBuilder = function (name, value) {
        formattedString.FormattedString.addFormattedStringToView(this, name, value);
    };
    MaterialSwitch.isOnProperty = isOnProperty;
    MaterialSwitch.isEnabledProperty = isEnabledProperty;
    MaterialSwitch.isBounceEnabledProperty = isBounceEnabledProperty;
    MaterialSwitch.isRippleEnabledProperty = isRippleEnabledProperty;
    return MaterialSwitch;
})(view.View);
exports.MaterialSwitch = MaterialSwitch;
