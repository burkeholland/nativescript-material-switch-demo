var material_switch_1 = require("./material-switch");
function pageLoaded(args) {
    var page = args.object;
    var layout = page.getViewById('layout');
    try {
        var mswitch = new material_switch_1.MaterialSwitch();
        mswitch.isEnabled = false;
        layout.addChild(mswitch);
    }
    catch (err) {
        console.log(err);
    }
}
exports.pageLoaded = pageLoaded;
