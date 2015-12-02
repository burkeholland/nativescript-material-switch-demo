var observable_1 = require("data/observable");
var material_switch_1 = require("./custom/material-switch");
var model = new observable_1.Observable({
    isOn: true,
    isEnabled: false,
    isBounceEnabled: true,
    isRippleEnabled: true
});
function pageLoaded(args) {
    var page = args.object;
    var layout = page.getViewById('layout');
    try {
        var mswitch = new material_switch_1.MaterialSwitch();
        layout.addChild(mswitch);
    }
    catch (err) {
        console.log(err);
    }
    page.bindingContext = model;
}
exports.pageLoaded = pageLoaded;
