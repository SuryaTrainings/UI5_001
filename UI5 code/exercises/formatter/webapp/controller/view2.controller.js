sap.ui.define([
    "st/b33/SimpleApp/controller/BaseController",
    "st/b33/SimpleApp/util/formatter"
], function(BaseController,Formatter) {
   'use strict';
    return BaseController.extend("st.b33.SimpleApp.controller.view2",{

        oFormatter:Formatter,
       
        onBack:function(){
            var oView=this.getView();
            var oAppcon=oView.getParent();
            oAppcon.to("idView1");
        }
       

    })
});