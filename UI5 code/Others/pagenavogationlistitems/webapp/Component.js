sap.ui.define([
    'sap/ui/core/UIComponent'
], function (UIComponent) {
    'use strict';
    return UIComponent.extend("st.b33.simpleApp.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            //This is self start of application, initilizing all objects, ready to handle app data
            sap.ui.core.UIComponent.prototype.init.apply(this);
        },
        createContent: function () {
            var oXMLView = new sap.ui.view("idMain", {
                viewName: "st.b33.simpleApp.view.App",
                type: sap.ui.core.mvc.ViewType.XML
            });
            var oView1 = new sap.ui.view("idMain1", {
                viewName: "st.b33.simpleApp.view.view1",
                type: sap.ui.core.mvc.ViewType.XML
            });
            var oView2 = new sap.ui.view("idMain2", {
                viewName: "st.b33.simpleApp.view.view2",
                type: sap.ui.core.mvc.ViewType.XML
            });

            var oAppCon = oXMLView.byId("appCon");
            oAppCon.addPage(oView1);
            oAppCon.addPage(oView2);

            return oXMLView;
        },
        destroy: function () {

        }
    })
});