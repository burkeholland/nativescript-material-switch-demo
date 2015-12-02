var application = require("application");
application.mainModule = "main-page";
application.cssFile = "./app.css";
try {
	application.start();
}
catch (err) {
	console.log(err);
}
