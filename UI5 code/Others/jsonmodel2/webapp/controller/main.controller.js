sap.ui.define([
   'root/controller/baseController',
   'root/models/model'
    ], function (oController, oModel) {
    'use strict';
        debugger;
    console.log("Basic controller loaded successfully");

    return oController.extend("root.controller.main", {

        onInit:function(){

        },

        onBeforeRendering: function(){
            // this.getView().byId("idInput").setValue(this.x);
        },

        onAfterRendering: function(){
        //     debugger;
        //    $(this.getView().byId("idBtn")).fadeOut(5000).fadeIn(5000);
        },

         onExit: function(){

        },
        onPress: function () {
            // alert("View button fired");
            // debugger;

            // console.log("Method loaded successfully");
        },
        onClick: function(oEvent){

            // Hardcoded date 
            // this.getView().byId("idIdInput").setValue("ID0001"),
            // this.getView().byId("idNameInput").setValue("Mr A"),
            // this.getView().byId("idClassInput").setValue("10"),
            // this.getView().byId("idMarksInput").setValue("738")

            // debugger;
            // alert(this.x);
            // Dynamic data
            //1 - create empty object
            var oModelData = oModel.createJsonModel('./models/mockData/studentdata.json'); 

            //3 - set data at application 
            this.oCore.setModel(oModelData);
            // sap.ui.getCore().setModel(oModel);
            
            //3rd way displaying data
            this.getView().byId("idClassInput").bindValue("/studentData/class");
            this.getView().byId("idMarksInput").bindProperty("value", "/studentData/marks");


            //1 - Testing
            // alert("On click event fired");

            // //2 - Your own logic - cureent screen 
            // debugger;
            // //Get object refernce - document
            // //var oDcouemnt = sap.ui.getCore(); - Local (current controller)--> Global (baseController)
            // var oDocument = this.oCore;
            // var oInp = oDocument.byId("idMain--idInput"); //Viewname--propertyid
            // var oValue = oInp.getValue();
            // alert(oValue);

            // //3 - way - current screen
            // // var oDocument = this.getView();
            // // var oInp = oDocument.byId("idInput"); //Viewname--propertyid
            // // var oValue = oInp.getValue();
            // // alert(oValue);

            // //4 - otherway of wrting 
            // // alert( this.getView().byId("idInput").getValue() );

            // sap.ui.require(["sap/m/MessageToast"],function(oMessageToast){
            //     oMessageToast.show(oValue);

            // });

            // sap.ui.require(["sap/m/MessageBox"],function(oMessageBox){
            //     oMessageBox.success(oValue);

            // });

        }
    });
});