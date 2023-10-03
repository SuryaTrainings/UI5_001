sap.ui.define([
    'root/controller/baseController',
    'root/models/model'
], function (oController, oJsonModel) {
    'use strict';
    console.log("Basic controller loaded successfully");

    return oController.extend("root.controller.main", {

        onInit: function () {
            //1 - call method
            var oModel = oJsonModel.createJsonModel('./models/studentData.json');
            var oModel2 = oJsonModel.createJsonModel('./models/studentData2.json');
            
            //3 - set data at application 
            // this.oCore.setModel(oModel2);   //named model
            this.oCore.setModel(oModel);   //named model
            // this.oCore.setModel(oModel,'s1');  //named model
            // sap.ui.getCore().setModel(oModel);

            //3rd way displaying data
            this.getView().byId("idClassInput").bindValue("/studentData/class");
            this.getView().byId("idMarksInput").bindProperty("value", "/studentData/marks");
        },

        onBeforeRendering: function () {
            // this.getView().byId("idInput").setValue(this.x);
        },

        onAfterRendering: function () {

            //    $(this.getView().byId("idBtn")).fadeOut(5000).fadeIn(5000);
        },

        onExit: function () {

        },
        onPress: function () {
            // alert("View button fired");


            // console.log("Method loaded successfully");
        },
        onClick: function (oEvent) {
            console.log( this.oCore.getModel().oData );

        }
    });
});