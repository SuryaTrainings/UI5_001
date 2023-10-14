sap.ui.define([
    'st/b33/simpleApp/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.view2",{

        onBack: function(){
            var oView = this.getView();
            var oAppCon = oView.getParent();

            // Navigate to child object
            //Get child 2 id name 
            oAppCon.to("idView1");
        }

    })
});