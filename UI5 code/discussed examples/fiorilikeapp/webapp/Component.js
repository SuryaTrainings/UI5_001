sap.ui.define([
    'sap.ui.core.UIComponent'
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
        },
        //3 - Load our own data 
        createContent: function(){
            var oAppView = new sap.ui.view("idMain",{
                viewName: "st.b33.simpleApp.view.App",
                type: sap.ui.core.mvc.ViewType.XML
            });

            return oAppView;
        },
        //4 - destory 
        destroy: function(){

        }
    })
    
});