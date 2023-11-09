sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';

    return UIComponent.extend("st.b33.simpleApp.Component",{
        //1 - metadata 
        metadata:{
            manifest: "json"
        },
        //2 - init ( key ) - Prototype 
        init:function(){
            sap.ui.core.UIComponent.prototype.init.apply(this);

            var oRouter = this.getRouter();
            oRouter.initialize();
        },
        //3 - Load our own data 
        // createContent: function(){
        //     var oAppView = new sap.ui.view("idMain",{
        //         viewName: "st.b33.simpleApp.view.App",
        //         type: sap.ui.core.mvc.ViewType.XML
        //     });


        //     var oAppView1 = new sap.ui.view("idView1",{
        //         viewName: "st.b33.simpleApp.view.view1",
        //         type: sap.ui.core.mvc.ViewType.XML
        //     });

            
        //     var oAppView2 = new sap.ui.view("idView2",{
        //         viewName: "st.b33.simpleApp.view.view2",
        //         type: sap.ui.core.mvc.ViewType.XML
        //     });

        //     var oAppCon = oAppView.byId("idAppCon");
        //     oAppCon.addMasterPage(oAppView1);
        //     oAppCon.addDetailPage(oAppView2);

        //     return oAppView;
        // },
        //4 - destory 
        destroy: function(){

        }
    })
    
});