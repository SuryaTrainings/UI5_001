sap.ui.define([
    'sap/ui/core/mvc/Controller'
    ], function (oController) {
    'use strict';
    console.log("Basic controller loaded successfully");
    return oController.extend("root.controller.main", {
        //Global variable for this class
        x: 399,

        onInit:function(){
            alert(x);
        },

        onExit: function(){

        },
        onPress: function () {
            alert("View button fired");
            debugger;

            console.log("Method loaded successfully");
        },
        onClick: function(oEvent){
            //1 - Testing
            // alert("On click event fired");

            //2 - Your own logic - cureent screen 
            debugger;
            // //Get object refernce - document
            // var oDocument = sap.ui.getCore();
            // var oInp = oDocument.byId("idMain--idInput"); //Viewname--propertyid
            // var oValue = oInp.getValue();
            // alert(oValue);

            //3 - way - current screen
            var oDocument = this.getView();
            var oInp = oDocument.byId("idInput"); //Viewname--propertyid
            var oValue = oInp.getValue();
            // alert(oValue);

            //4 - otherway of wrting 
            // alert( this.getView().byId("idInput").getValue() );

            sap.ui.require(["sap/m/MessageToast"],function(oMessageToast){
                oMessageToast.show(oValue);

            });

            sap.ui.require(["sap/m/MessageBox"],function(oMessageBox){
                oMessageBox.success(oValue);

            });

            sap/m/MessageBox
        }
    });
});