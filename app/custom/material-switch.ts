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

(<proxy.PropertyMetadata>isBounceEnabledProperty.metadata).onSetNativeValue = onIsBounceEnabledChanged;

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

(<proxy.PropertyMetadata>isRippleEnabledProperty.metadata).onSetNativeValue = onIsRippleEnabledChanged;
	
enum MaterialSwitchStyle { 
	light = JTMaterialSwitchStyleLight,
	dark = JTMaterialSwitchStyleDark,
	default = JTMaterialSwitchStyleDefault
};

enum MaterialSwitchSize {
	big = JTMaterialSwitchSizeBig,
	normal = JTMaterialSwitchSizeNormal,
	small = JTMaterialSwitchSizeSmall
};

enum MaterialSwitchState {
	on = JTMaterialSwitchStateOn,
	off = JTMaterialSwitchStateOff
};

export class MaterialSwitch extends view.View {
	
	private _ios: JTMaterialSwitch;
	private _style: MaterialSwitchStyle;
	private _state: MaterialSwitchState;
	private _size: MaterialSwitchSize;

	public static isOnProperty = isOnProperty;
	public static isEnabledProperty = isEnabledProperty;
	public static isBounceEnabledProperty = isBounceEnabledProperty;
	public static isRippleEnabledProperty = isRippleEnabledProperty;
	
	constructor() {
		super();
		try {
			// this works...
			// this._ios.JTMaterialSwitch.alloc().init();
			
			// this does not work...error: "initWithSize" is not a function
			this._ios = JTMaterialSwitch.alloc().initWithSize(JTMaterialSwitchSizeNormal, JTMaterialSwitchStateOn, JTMaterialSwitchStyleDefault);
		
			// but both initializers are defined in the header file for JTMaterialSwitch
		}
		catch (err) {
			console.log(err);
		}
	}
	
	get ios(): JTMaterialSwitch {
		return this._ios;
	}
	
	get size(): MaterialSwitchSize {
		return this._size;
	}
	
	set size(value: MaterialSwitchSize) {
		this._size = value;
	}
	
	get state(): MaterialSwitchState {
		return this._state;
	}
	
	set state(value: MaterialSwitchState) {
		this.state = value;
	}
	
	get style(): MaterialSwitchStyle {
		return this._style;
	}
	
	set style(value: MaterialSwitchStyle) {
		this._style = value;
	}
	
	// isOn
	
	get isOn(): boolean {
		return this._getValue(MaterialSwitch.isOnProperty);
	}
	
	set isOn(value: boolean) {
		this._setValue(MaterialSwitch.isOnProperty, value);
	}
	
	public _onIsOnChanged(data: dependencyObservable.PropertyChangeData) {
		console.log("Is On Changed");
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
		console.log("Is Bounce Enabled Changed");
		this._ios.isBounceEnabled = data.newValue;
	}
	
	// isRippleEnabled
	
	get isRippleEnabled(): boolean {
		return this._getValue(MaterialSwitch.isRippleEnabledProperty);
	}
	
	set isRippleEnabled(value: boolean) {
		this._setValue(MaterialSwitch.isRippleEnabledProperty, value);
	}
	
	public _onIsRippleEnabledChanged(data: dependencyObservable.PropertyChangeData) {
		console.log("Is Ripple Enabled Changed");
		this._ios.isRippleEnabled = data.newValue;
	}
	
	public _addChildFromBuilder(name: string, value: any): void {
		formattedString.FormattedString.addFormattedStringToView(this, name, value);
	}
}