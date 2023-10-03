sap.ui.define([
    'root/controller/baseController',
    'root/models/model'
], function (oController, oModel) {
    'use strict';
    debugger;
    console.log("Basic controller loaded successfully");

    return oController.extend("root.controller.main", {

        onInit: function () {
            var oModelData = oModel.createJsonModel('./models/mockData/studentdata.json');
            
            var oModelData2 = oModel.createJsonModel('./models/mockData/studentdata2.json');
            
            // oModel.setDefaultBindingMode("OneWay");
            
            //3 - set data at application 
            this.oCore.setModel(oModelData);
            this.oCore.setModel(oModelData2,"s2");
            // sap.ui.getCore().setModel(oModel);

            //3rd way displaying data
            this.getView().byId("idClassInput").bindValue("/studentData/class");
            this.getView().byId("idMarksInput").bindProperty("value", "/studentData/marks");
        },

        onBeforeRendering: function () {
            // this.getView().byId("idInput").setValue(this.x);
        },

        onAfterRendering: function () {
            //     debugger;
            //    $(this.getView().byId("idBtn")).fadeOut(5000).fadeIn(5000);
        },

        onExit: function () {

        },
        onPress: function () {
            // alert("View button fired");
            // debugger;

            // console.log("Method loaded successfully");
        },
        onClick: function (oEvent) {

            var oModelData = this.oCore.getModel();
            var oJsonData = oModelData.getProperty("/studentData");
            console.log(oJsonData);
            oModelData.setProperty(
                "/studentData", {
                "id": "ID9999",
                "name": "Mr India",
                "class": "12",
                "marks": "980"
            }
            )

        },
        onShow: function () {
            debugger;
            var oModelData = this.oCore.getModel();
            var oJsonData = oModelData.getProperty("/studentData");
            console.log(oJsonData);
            debugger;
        }
    });
});