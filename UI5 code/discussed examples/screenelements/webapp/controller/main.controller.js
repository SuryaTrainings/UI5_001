sap.ui.define([
    'root/controller/baseController',
    'root/models/model',
    'root/util/formatter'
], function (oController, oJsonModel, oFormatter) {
    'use strict';
    console.log("Basic controller loaded successfully");

    return oController.extend("root.controller.main", {

        //Global variable 
        oFormatterMethods: oFormatter,
        
        onInit: function () {
            //1 - call method
            var oModel = oJsonModel.createJsonModel('./models/studentData.json');
            var oModel2 = oJsonModel.createJsonModel('./models/studentData2.json');
            
            //3 - set data at application 
            // this.oCore.setModel(oModel2);   //named model
            this.oCore.setModel(oModel);   //named model
            this.oCore.setModel(oModel2,'s2');  //named model
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
            debugger;
            var oDefaultModel = this.oCore.getModel();
            var oNamedtModel = this.oCore.getModel("s2");
            this.oCore.setModel(oNamedtModel);
            this.oCore.setModel(oDefaultModel, "s2");
        },
        onRowSelectionChange: function(oControllerEvent){
            debugger;
            //get absolute path 
            var oAbsolutePath = oControllerEvent.getParameter("rowContext").getPath();
            //get form refernce
            var oForm = this.getView().byId("idForm2");
            //from.rercner - to fill the data - element binding
            oForm.bindElement(oAbsolutePath);
        }
    });
});