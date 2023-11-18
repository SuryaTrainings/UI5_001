sap.ui.define([
    'root/controller/BaseController',
    'root/models/model'
     ], function (oController, oJsonModel) {
     'use strict';
         
     
 
     return oController.extend("root.controller.main", {

        onInit:function(){
            // var oModel = oJsonModel.createJsonModel('./models/studentData.json'); 
            //  //3 - set data at application 
            //             this.oCore.setModel(oModel);
                        
            //             //3rd way displaying data
            //             this.getView().byId("idSname").bindValue("/studentData/name");
            //             this.getView().byId("idSid").bindValue("/studentData/id");
            //             this.getView().byId("idSclass").bindValue("/studentData/class");
            //             this.getView().byId("idsmarks").bindProperty("value", "/studentData/marks");
           
             },
 
         onClick: function(oEvent){

            var oModel = oJsonModel.createJsonModel('./models/studentData.json'); 
            var oModel1=oJsonModel.createJsonModel('./models/studentData1.json'); 
                        //3 - set data at application 
                       this.oCore.setModel(oModel);
                        this.oCore.setModel(oModel1,"s1");
                        //3rd way displaying data
                        this.getView().byId("idSclass").bindValue("s1>/studentData/class");
                        this.getView().byId("idsmarks").bindProperty("value", "s1>/studentData/marks");
             
 //console.log(this.oCore.getModel().oData);
 
         }
     });
 });