sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (oController) {
    'use strict';

    //All global varaible here

    return oController.extend("root.controller.baseController", {

        oCore: sap.ui.getCore(),
        x: 399
    });


});