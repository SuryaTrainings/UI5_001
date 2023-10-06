sap.ui.define([
    'sap/ui/model/json/JSONModel', //class (it with dots)--> module (replace dot with forward slash) 
    'sap/ui/model/resource/ResourceModel',
    'sap/ui/model/xml/XMLModel'
], function(oJSONModel,oResourceModel, oXMLModel) {
    'use strict';
    return {
        createJsonModel: function(filepath){
            // var oModel = new sap.ui.model.json.JSONModel( ); 
            var oModel = new oJSONModel;
            // oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            // oModel.setData();
            oModel.loadData(filepath);  
            return oModel;    
        },
        createResourceModel: function(){
            debugger;
            var oRModel = new oResourceModel({
                bundleUrl : "i18n/i18n_te.properties"
            });
            return oRModel;
        },
        createXMLModel: function(filepath){
            var oXModel = new oXMLModel;
            oXModel.loadData(filepath);  
            return oXModel;    
        },
        
      
    }
});