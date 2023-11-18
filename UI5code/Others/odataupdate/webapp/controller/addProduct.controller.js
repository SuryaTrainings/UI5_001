sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    'sap/m/MessageBox',

], function (BaseController, JSONModel, MessageToast, MessageBox) {
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
                success: function (oSuccessResult) {
                    MessageBox.success("Data created successfully");
                },
                error: function (oErrorResult) {
                    MessageBox.error(JSON.parse(oErrorResult.responseText).error.innererror.errordetails[0].message);
                }
            })
        },
        onReset: function () {
            this.getView().getModel('prod').setData({
                "ProductSet": {
                    "PRODUCT_ID": "",
                    "TYPE_CODE": "PR",
                    "CATEGORY": "",
                    "NAME": "",
                    "DESCRIPTION": "",
                    "SUPPLIER_ID": "0100000049",
                    "SUPPLIER_NAME": "Talpa",
                    "WEIGHT_MEASURE": "4.200 ",
                    "WEIGHT_UNIT": "KG",
                    "PRICE": "0.00",
                    "CURRENCY_CODE": ""
                }
            }
            )
        },
        onSubmit: function(oEvent){
            //1 - Get product ID entered by user on screen.
            var oPrdId = oEvent.getParameter("value");

            //2 - Get OData model object & JSON Model
            var oJsonModel = this.getView().getModel('prod');
            var oDataModel = this.getView().getModel();

            //3 - Prepare path to read odata object
            var sPath = "/ProductSet('"+oPrdId+"')";
            //4 - Fire odata get call to read
            oDataModel.read(sPath, {
                success: function(payload){
                    oJsonModel.setProperty("/ProductSet",payload);
                    MessageToast.show(sPath+" Product loaded successfully");
                },
                error: function(oErrorResult){
                    MessageBox.error(JSON.parse(oErrorResult.responseText).error.innererror.errordetails[0].message);
                }
            })
            //5 - Set data back to view
        }
    })
});