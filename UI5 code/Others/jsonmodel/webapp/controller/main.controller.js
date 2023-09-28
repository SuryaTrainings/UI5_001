sap.ui.define([
   'root/controller/baseController'
    ], function (oController) {
    'use strict';
        debugger;
    console.log("Basic controller loaded successfully");

    return oController.extend("root.controller.main", {

        onInit:function(){
            // debugger;
            // alert(this.x);
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

            // Coding - 1
            // this.getView().byId("idIdInput").setValue("ID001"),
            // this.getView().byId("idNameInput").setValue("Mr A"),
            // this.getView().byId("idClassInput").setValue("10"),
            // this.getView().byId("idMarksInput").setValue("738")

            var oModel = new sap.ui.model.json.JSONModel( );
            oModel.setData({
                "studentData":{
                    "id":"ID0002",
                    "Name":"Mr B",
                    "Class":"8",
                    "Marks":"783"
                }
            });  
            this.oCore.setModel(oModel);

            this.getView().byId("idClassInput").bindValue("/studentData/Class");
            this.getView().byId("idMarksInput").bindProperty('value',"/studentData/Marks");

            // //1 - Testing
            // // alert("On click event fired");

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