import view = require("ui/core/view");
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import formattedString = require("text/formatted-string");

// isOn

var isOnProperty = new dependencyObservable.Property(
	"isOn",
	"MaterialSwitch",
	new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout)
);

function onIsOnChanged(data: dependencyObservable.PropertyChangeData) {
	var m = <MaterialSwitch>data.object;
	m._onIsOnChanged(data);
}

(<proxy.PropertyMetadata>isOnProperty.metadata).onSetNativeValue = onIsOnChanged;

// isEnabled

var isEnabledProperty = new dependencyObservable.Property(
	"isEnabled",
	"MaterialSwitch",
	new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.None)
);

function onIsEnabledChanged(data: dependencyObservable.PropertyChangeData) {
	var m = <MaterialSwitch>data.object;
	m._onIsEnabledChanged(data);
}

(<proxy.PropertyMetadata>isEnabledProperty.metadata).onSetNativeValue = onIsEnabledChanged;

// isBounceEnabled

var isBounceEnabledProperty = new dependencyObservable.Property(
	"isBounceEnabled",
	"MaterialSwitch",
	new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.None)
);

function onIsBounceEnabledChanged(data: dependencyObservable.PropertyChangeData) {
	var m = <MaterialSwitch>data.object;
	m._onIsBounceEnabledChanged(data);
}

(<proxy.PropertyMetadata>isEnabledProperty.metadata).onSetNativeValue = onIsBounceEnabledChanged;

// isRippleEnabled

var isRippleEnabledProperty = new dependencyObservable.Property(
	"isRippleEnabled",
	"MaterialSwitch",
	new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.None)
);

function onIsRippleEnabledChanged(data: dependencyObservable.PropertyChangeData) {
	var m = <MaterialSwitch>data.object;
	m._onIsRippleEnabledChanged(data);
}

(<proxy.PropertyMetadata>isEnabledProperty.metadata).onSetNativeValue = onIsRippleEnabledChanged;

export class MaterialSwitch extends view.View {
	private _ios: JTMaterialSwitch;

	public static isOnProperty = isOnProperty;
	public static isEnabledProperty = isEnabledProperty;
	public static isBounceEnabledProperty = isBounceEnabledProperty;
	public static isRippleEnabledProperty = isRippleEnabledProperty;
	
	constructor() {
		super();
		this._ios = JTMaterialSwitch.alloc().init();
	}
	
	get ios(): JTMaterialSwitch {
		return this._ios;
	}
	
	// isOn
	
	get isOn(): boolean {
		return this._getValue(MaterialSwitch.isOnProperty);
	}
	
	set isOn(value: boolean) {
		this._setValue(MaterialSwitch.isOnProperty, value);
	}
	
	public _onIsOnChanged(data: dependencyObservable.PropertyChangeData) {
		this._ios.isOn = data.newValue;
	}

	// isEnabled
	
	get isEnabled(): boolean {
		return this._getValue(MaterialSwitch.isEnabledProperty);
	}
	
	set isEnabled(value: boolean) {
		this._setValue(MaterialSwitch.isEnabledProperty, value);
	}
	
	public _onIsEnabledChanged(data: dependencyObservable.PropertyChangeData) {
		console.log("Is Enabled Changed");
		this._ios.isEnabled = data.newValue;
	}

	// isBounceEnabled
	
	get isBounceEnabled(): boolean {
		return this._getValue(MaterialSwitch.isBounceEnabledProperty);
	}
	
	set isBounceEnabled(value: boolean) {
		this._setValue(MaterialSwitch.isBounceEnabledProperty, value);
	}
	
	public _onIsBounceEnabledChanged(data: dependencyObservable.PropertyChangeData) {
		this._ios.isBounceEnabled = data.newValue;
	}
	
	// isRippleEnabled
	
	get isRippleEnabled(): boolean {
		return this._getValue(MaterialSwitch.isRippleEnabled);
	}
	
	set isRippleEnabled(value: boolean) {
		this._setValue(MaterialSwitch.isRippleEnabled, value);
	}
	
	public _onIsRippleEnabledChanged(data: dependencyObservable.PropertyChangeData) {
		this._ios.isRippleEnabled = data.newValue;
	}
	
	public _addChildFromBuilder(name: string, value: any): void {
		formattedString.FormattedString.addFormattedStringToView(this, name, value);
	}
}