sap.ui.define([
    "st/b33/SimpleApp/controller/BaseController"
], function(BaseController) {
    'use strict';
    return BaseController.extend("st.b33.SimpleApp.controller.view1",{

        onNext:function(){
            var oView=this.getView();
            var oAppcon=oView.getParent();
            oAppcon.to("idView2");
        }
       
    })
});