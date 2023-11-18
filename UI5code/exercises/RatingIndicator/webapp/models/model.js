sap.ui.define([
    'sap/ui/model/json/JSONModel' //class (it with dots)--> module (replace dot with forward slash) 
], function(oJSONModel) {
    'use strict';
    return {
        createJsonModel: function(filepath){
            // var oModel = new sap.ui.model.json.JSONModel( ); 
            var oModel = new oJSONModel;
            //oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            oModel.loadData(filepath);
            return oModel;    
        }
      
    }
});