import { Observable } from "data/observable";
import { Page } from "ui/page";
import { EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";
import { MaterialSwitch } from "./custom/material-switch";

var model = new Observable({
    isOn: true,
    isEnabled: false,
    isBounceEnabled: true,
    isRippleEnabled: true
});

function pageLoaded(args: EventData) {
    var page = <Page>args.object;
    var layout = <StackLayout>page.getViewById('layout');
    
    try {
        var mswitch = new MaterialSwitch();
        layout.addChild(mswitch);
    }
    catch (err) {
        console.log(err);
    }
    
    page.bindingContext = model; 
}
exports.pageLoaded = pageLoaded;
