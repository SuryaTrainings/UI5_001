sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (oController) {
    'use strict';
    
    return oController.extend("root.controller.view1", {

        onAccept: function () {
            
            alert("Button should be accepted");
            
        },

        onReject: function(){
            alert("button should be rejected");
        },
        onBack: function(){
            alert("page should be navigated");
        }

        
    });
});