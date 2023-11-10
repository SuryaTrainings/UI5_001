sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'st/b33/simpleApp/util/formatter',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    'sap/m/MessageBox',
    
], function (BaseController, Filter, FilterOperator, Formatter, JSONModel, MessageToast, MessageBox) {
    'use strict';

    return BaseController.extend("st.b33.simpleApp.controller.addProductPage", {

        onInit: function () {
            var oJSONModel = new JSONModel();
            oJSONModel.setData({
                "productData": {
                    "PRODUCT_ID": "",
                    "TYPE_CODE": "PR",
                    "CATEGORY": "",
                    "NAME": "",
                    "DESCRIPTION": "",
                    "SUPPLIER_ID": "0100000049",
                    "SUPPLIER_NAME": "Talpa",
                    "WEIGHT_MEASURE": "4.200 ",
                    "WEIGHT_UNIT": "KG",
                    "PRICE": "0",
                    "CURRENCY_CODE": "USD"
                }
            });
            this.getView().setModel(oJSONModel,"oProdModel")
        },

        onSave: function(){
            //1 - get payload
            var payload = this.getView.getModel("oProdModel").getProperty("/productData")
            //2 - OData model object
            var oDataModel = this.getView.getModel();
            //3 - Trigger post call
            oDataModel.create("/productData", payload,{
                success: function(oResult){
                    MessageToast.show("Product created successfully");
                },
                error: function(oError){
                    //MessageBox.show("Product creation failed");
                    MessageBox.error(JSON.pars(oError.responseText).error.innererror.errordetails[0].message);
                }
            });
            //4 - Get response back 
        }

    })
});
