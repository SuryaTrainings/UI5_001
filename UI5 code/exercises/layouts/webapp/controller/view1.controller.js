sap.ui.define([
    'sap/ui/core/mvc/Controller',
    
    ], function (oController) {
        'use strict';
        return oController.extend("root.controller.view1", {

            onInit:function(){
                alert("on init method executed");
            },
            onClick: function(){
                sap.ui.require(["sap/m/MessageBox"],function(oMessageBox){
                    oMessageBox.success("ui5 application executed successfully");
                })
            }
            
             });
    
    });