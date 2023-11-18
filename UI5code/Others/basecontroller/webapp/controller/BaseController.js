sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(oController) {
    'use strict';
    return oController.extend("root.controller.BaseController",{
        oCore: sap.ui.getCore(),
        oMessageToast: sap.m.MessageToast()
    });
});