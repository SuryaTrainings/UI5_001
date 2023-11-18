sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    'sap/m/MessageBox',

], function (BaseController, JSONModel, MessageToast, MessageBox) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.addProduct", {
        productPath: '',
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
                    "CATEGORY": "Notebooks",
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
            var that = this;
            //2 - Get OData model object & JSON Model
            var oJsonModel = this.getView().getModel('prod');
            var oDataModel = this.getView().getModel();

            //3 - Prepare path to read odata object
            var sPath = "/ProductSet('"+oPrdId+"')";
            this.productPath = sPath;
            //4 - Fire odata get call to read
            oDataModel.read(sPath, {
                success: function(payload){
                    oJsonModel.setProperty("/ProductSet",payload);
                    MessageToast.show(sPath+" Product loaded successfully");
                    debugger;
                    that.loadPhoto(sPath).bind(that);
                },
                error: function(oErrorResult){
                    MessageBox.error(JSON.parse(oErrorResult.responseText).error.innererror.errordetails[0].message);
                }
            })
            //5 - Set data back to view
        },
        onCostlyProduct: function(){
            //1 - Get the category from Dropdown
            var sPayload = this.getView().getModel("prod").getProperty("/ProductSet");
            var sCategory = sPayload.CATEGORY;
            var that = this;
            //2 - Get OData model object
            var oDataModel = this.getView().getModel();

            //3 - Call odata request to load data from server 
            oDataModel.callFunction("/GetMostExpensiveProduct",{
                urlParameters: {
                    "I_CATEGORY": sCategory
                },
                success: function(oSuccess){
                    that.getView().getModel("prod").setProperty("/ProductSet",oSuccess);
                },
                error: function(oErrorResult){
                    MessageBox.error(JSON.parse(oErrorResult.responseText).error.innererror.errordetails[0].message);
                }
            });
            //4 - Call back
            //5 - Set data to screen

        },
        loadPhoto: function(sPath){
            sPath = sPath.replace("ProductSet","ProdPicSet");
            var oPhoto = "/sap/opu/odata/SAP/ZUI_ODATA_01_SRV" + sPath + "/$value";
            this.getView().byId("idPhoto").setSrc("oPhoto");
        },
        onDelete: function(){
            var that = this;
            MessageBox.confirm("Would you like to delete?",{
                onClose: function(status){
                    if( status === "OK"){
                        //step - 2 : Get odata model object
                        var oDataModel = that.getView().getModel();
                        //Step - 3 : Send delete request
                        oDataModel.remove(that.productPath,{
                            success : function(){
                                MessageToast.show("Product deleted successfully");
                                that.getView().getModel('prod').setData({
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
                                    }});
                            },
                            error: function(){
                                MessageToast.show("Product deleteion failed");
                            }
                        })
                        //Step - 4 : Handle call back

                    }
                }
            })
        }
    })
});