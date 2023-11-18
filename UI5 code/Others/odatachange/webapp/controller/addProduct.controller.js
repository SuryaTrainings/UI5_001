sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    'sap/m/MessageBox'
], function (BaseController, JSONModel, MessageToast, MessageBox) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.addProduct", {

        onInit: function () {
            var oJSONModel = new JSONModel();

            oJSONModel.setData({

                ProductSet: {
                    "PRODUCT_ID": "HT-123",
                    "TYPE_CODE": "PR",
                    "CATEGORY": "Notebooks",
                    "NAME": "Science NoteBooks",
                    "DESCRIPTION": "Notebooks are very useful for Writing purpose",
                    "SUPPLIER_ID": "0100000046",
                    "SUPPLIER_NAME": "SAP",
                    "WEIGHT_MEASURE": "4.200 ",
                    "MEASURE_UNIT": "EA",

                }

            });
            this.getView().setModel(oJSONModel, "prod");
            this.getOwnerComponent().getRouter().getRoute("addProductData").attachMatched(this.setMode, this);
        },

        setMode: function () {
            this.changeMode("Create");
        },
        sPath : "" ,

        onReset: function () {

            this.changeMode("Create");

            this.getView().getModel("prod").setData({
                "enable": true,
                ProductSet: {
                    "PRODUCT_ID": "",
                    "TYPE_CODE": "PR",
                    "CATEGORY": "",
                    "NAME": "",
                    "DESCRIPTION": "",
                    "SUPPLIER_ID": "0100000046",
                    "SUPPLIER_NAME": "SAP",
                    "WEIGHT_MEASURE": "4.200 ",
                    "MEASURE_UNIT": "EA",

                }

            });
        },

        onGet: function () {

            var that = this;

            debugger;
            //1.Read product Id
            var oinput = this.getView().byId("idProductID").getValue();
            //2.Get OData model,Get JSON MODEL.
            var oDataModel = this.getView().getModel();
            var oJsonModel = this.getView().getModel("prod");
            //3.ProductSet('HT-1000')
            var sPath = "/ProductSet('" + oinput + "')";
            this.sPath = sPath;
            //4.Perform read operations via Odata Call
            oDataModel.read(sPath, {
                success: function (data) {
                    oJsonModel.setProperty("/ProductSet", data);
                    MessageBox.success("Data loaded successfully");
                    that.changeMode("Change");
                },
                error: function (ErrorMsg) {
                    MessageBox.error(JSON.parse(ErrorMsg.responseText).error.innererror.errordetails[0].message);

                }
            });
            var sImagePath =
                '/sap/opu/odata/SAP/ZUI_ODATA_02_SRV/' +
                "MediaSet('" +
                oinput +
                "')/$value";
            //this.getView().byId("idImageProduct").setSrc(sImagePath);

            //5.Success-bind data to ojson model
        },

        onDelete: function () {
            debugger;
            var that = this;
            //1.Get selected productid
            var oinput = this.getView().byId("idProductId").getValue();
            //2.Get OData Model
            var oDataModel = this.getView().getModel();
            //3.Get JSON DataModel
            var oJsonModel = this.getView().getModel("prod");
            //4.prepare path
            var sPath = "/ProductSet('" + oinput + "')";

            //5.Call remove request
            oDataModel.remove(sPath, {
                success: function (data) {
                    MessageBox.success("Data deleted successfully");
                    that.getView().getModel("prod").setData({
                        "enable": true,
                        "ProductSet": {
                            "PRODUCT_ID": "",
                            "TYPE_CODE": "PR",
                            "CATEGORY": "",
                            "NAME": "",
                            "DESCRIPTION": "",
                            "SUPPLIER_ID": "0100000046",
                            "SUPPLIER_NAME": "SAP",
                            "WEIGHT_MEASURE": "4.200 ",
                            "MEASURE_UNIT": "EA",

                        }

                    });


                },
                error: function (ErrorMsg) {
                    MessageBox.error(JSON.parse(ErrorMsg.responseText).error.innererror.errordetails[0].message);


                }
            })
            //5.1- success
            //clear data in the input screen
            //5.2 - error
            //Handle error log

        },

        mode: "create",

        changeMode: function (sMode) {
            if (sMode === "Create") {
                this.mode = "Create";
                this.getView().byId("idSaveData").setText("Create");
                this.getView().getModel("prod").setProperty("/enable", true);
            } else {
                this.mode = "Change";
                this.getView().byId("idSaveData").setText("Update");
                this.getView().getModel("prod").setProperty("/enable", false);
            }
        },
        onSave: function () {

            debugger;

            var payload = this.getView().getModel("prod").getProperty("/ProductSet");
            //get Default model odata model:manifest.json
            var oDataModel = this.getView().getModel();

            if(this.mode === "Create"){
            //post data to OData services with create method
            oDataModel.create('/ProductSet', payload, {
                success: function () {
                    MessageBox.success("Data loaded successfully");

                },
                error: function (ErrorMsg) {
                    // MessageToast.show("Data not created successfully");
                    MessageBox.error(JSON.parse(ErrorMsg.responseText).error.innererror.errordetails[0].message);

                }

            })}
            else{
                oDataModel.update(this.sPath, payload, {
                    success: function () {
                        MessageBox.success("Data updated successfully");
    
                    },
                    error: function (ErrorMsg) {
                        // MessageToast.show("Data not updated successfully");
                        MessageBox.error(JSON.parse(ErrorMsg.responseText).error.innererror.errordetails[0].message);
    
                    }
    
                })
            }


        }

    })
});