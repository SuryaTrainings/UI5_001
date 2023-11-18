sap.ui.define([
    'st/b33/simpleApp/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.View2",{
        onBack: function(){
            //Get current view object 
             var oView = this.getView();
            //Get root view / parent view 
            var oAppCon = oView.getParent();
            //Navigate to second view
            oAppCon.to("idMain1");
        }   
    })
});