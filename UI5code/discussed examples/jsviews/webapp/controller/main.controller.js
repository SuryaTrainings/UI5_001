sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function (oController) {
    'use strict';
    console.log("Basic controller loaded successfully");
    return oController.extend("root.controller.main", {

        onPress: function () {
            alert("View button fired");
            debugger;

            console.log("Method loaded successfully");
        }
    });
});