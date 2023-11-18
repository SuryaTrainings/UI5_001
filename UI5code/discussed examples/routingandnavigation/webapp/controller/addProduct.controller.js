sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast'
], function (BaseController, JSONModel, MessageToast) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.addProduct", {
        onInit: function () {

            var oJsonModel = new JSONModel();
            
            oJsonModel.setData({
                "ProductSet": {
                    "PRODUCT_ID": "HT-8786",
                    "TYPE_CODE": "PR",
                    "CATEGORY": "Notebooks",
                    "NAME": "HP Mouse",
                    "DESCRIPTION": "HP Wireless mouse",
                    "SUPPLIER_ID": "0100000049",
                    "SUPPLIER_NAME": "Talpa",
                    "WEIGHT_MEASURE": "4.200 ",
                    "WEIGHT_UNIT": "KG",
                    "PRICE": "100.00",
                    "CURRENCY_CODE": "USD"
                }
            });
            this.getView().setModel(oJsonModel, "prod");
        },
        onSave: function () {
            debugger;
            // Get view
            // View JOSN Model
            // JSON - ProductEntity Data only
            var payload = this.getView().getModel("prod").getProperty("/ProductSet");

            //Get Default data model - OData model 
            var oDataModel = this.getView().getModel();

            //Post data to OData service with create method
            // URI, payload, success / error - log
            oDataModel.create('/ProductSet', payload, {
                    //System parameter - can catch log at run time 
                    success: function(oSuccessResult){
                        MessageToast.show("Data created successfully");
                    },
                    error: function(oErrorResult){
                        MessageToast.show("Data creation failed");
                    }
            })
        }
    })
});