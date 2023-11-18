/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ibm/sd/sales/products/odatawithui5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});