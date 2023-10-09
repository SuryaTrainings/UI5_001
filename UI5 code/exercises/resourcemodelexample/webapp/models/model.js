sap.ui.define([
    'sap/ui/model/json/JSONModel',
     'sap/ui/model/resource/ResourceModel'
    //class (it with dots)--> module (replace dot with forward slash) 
], function(oJSONModel,oResourceModel) {
    'use strict';
    return {
        createJsonModel: function(filepath){
            // var oModel = new sap.ui.model.json.JSONModel( ); 
            var oModel = new oJSONModel;
            //oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            oModel.loadData(filepath);
            return oModel;    
        },

        createResourceModel: function(){
            var oRModel=new oResourceModel({
                bundleUrl : "i18n/i18n.properties"
            });
            return oRModel;
        }
      
    }
});