sap.ui.define([
    'sap/ui/model/json/JSONModel' //class (it with dots)--> module (replace dot with forward slash) 
], function(oJSONModel) {
    'use strict';
    return {
        createJsonModel: function(){
            // var oModel = new sap.ui.model.json.JSONModel( ); 
            var oModel = new oJSONModel;
            
            oModel.setData({
                "studentData":{
                    "id":"ID0001",
                    "name":"Mr ABC",
                    "class":"10",
                    "marks":"670"
                }      });
            return oModel;    
        }
      
    }
});