sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/odata/v2/ODataModel',
    'sap/m/MessageToast'
], function (BaseController, JSONModel, ODataModel, MessageToast) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.addProduct", {
        onInit: function () {
            var oJsonModel = new JSONModel();
            oJsonModel.setData({
                "ProductSet": {
                    "PRODUCT_ID": "123",
                    "TYPE_CODE": "PR",
                    "CATEGORY": "NOTEBOOKS",
                    "NAME": "PRODUCT",
                    "DESCRIPTION": "PRODUCT_DESC",
                    "SUPPLIER_ID": "0100000049",
                    "SUPPLIER_NAME": "Talpa",
                    "WEIGHT_MEASURE": "4.200 ",
                    "WEIGHT_UNIT": "KG",
                    "PRICE": "0.00",
                    "CURRENCY_CODE": "USD"
                }
            });
            this.getView().setModel(oJsonModel, "prod");
        },
        onSave: function () {
            //1. Prepare payload to send ABAP system / BACKEND
            var payload = this.getView().getModel("prod").getProperty("/ProductSet"); 
            //2. Get the odata model object
            var oDataModel = this.getView().getModel();
            //3. Trigger post operation
            oDataModel.create("/ProductSet",payload, {
                success: function(){
                    MessageToast.show("Data created successfully");
                },
                error: function(){
                    MessageToast.show("Data creation failed");
                }
            })
            //4. Display result
        }
    });
});