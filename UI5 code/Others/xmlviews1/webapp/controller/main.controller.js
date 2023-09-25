sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function (oController) {
    // 'use strict';
    console.log("Basic controller loaded successfully");
    return oController.extend("root.controller.main", {

        onPress: function () {
            alert("View button fired");
            debugger;

            console.log("Method loaded successfully");
        },
        onClick: function(oEvent){
            //Code - 1 
            alert("Tested");

            //Code - 2 
            // oDocument = sap.ui.getCore();
            // var oInp = oDocument.byId("idMain--idInput");
            // var sVal = oInp.getValue();
            // alert(sVal);

            //code -3 
            var oDocument = this.getView();
            var oInp = oDocument.byId("idInput");
            alert(oInp.getValue());
        }
    });
});