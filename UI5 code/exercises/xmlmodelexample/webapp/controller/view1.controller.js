sap.ui.define([
    'root/controller/BaseController',
    'root/models/model'
    
     ], function (oController,oXMLModel) {
     'use strict';
         
     
 
     return oController.extend("root.controller.view1", {
 
         
         
         onInit: function(oEvent){
             //1 - call method
             
             var oModel = oXMLModel.createXmlModel('./models/studentDetails.xml'); 
 
             //3 - set data at application 
             this.oCore.setModel(oModel);
            
             
             //3rd way displaying data
            //  this.getView().byId("idSclass").bindValue("/StudentInfo/class");
            //  this.getView().byId("idsmarks").bindProperty("value", "/StudentInfo/marks");
 
 
 
         }
     });
 });