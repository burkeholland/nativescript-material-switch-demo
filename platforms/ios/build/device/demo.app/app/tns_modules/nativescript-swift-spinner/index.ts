/// <reference path="demo/app/references.d.ts" />
import view = require("ui/core/view");

export class MaterialSwitch extends view.View {
	private _ios: JTMaterialSwitch;
	
	constructor() {
		super();
		this._ios = JTMaterialSwitch.alloc().init();
	    this._ios.center = CGPointMake(200,200);
	}
	
	get ios(): JTMaterialSwitch {
		return this._ios;
	}
}