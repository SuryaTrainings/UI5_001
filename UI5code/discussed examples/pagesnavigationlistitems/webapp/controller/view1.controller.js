sap.ui.define([
    'st/b33/simpleApp/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.view1",{
        onNext: function(){
            // get parent object
            var oView = this.getView();
            var oAppCon = oView.getParent();

            // Navigate to child object
            //Get child 2 id name 
            oAppCon.to("idView2");

        }
    })
});