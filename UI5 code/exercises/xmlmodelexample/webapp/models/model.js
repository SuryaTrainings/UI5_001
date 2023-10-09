sap.ui.define([
    'sap/ui/model/xml/XMLModel' //class (it with dots)--> module (replace dot with forward slash) 
], function(XMLModel) {
    'use strict';
    return {
        
        createXmlModel: function(filepath){
            debugger;     
            var oModel = new XMLModel;
            
            oModel.loadData(filepath);
            return oModel;    
        }
      
    }
});