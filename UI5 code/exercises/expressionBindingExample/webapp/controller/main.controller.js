sap.ui.define([
    'root/controller/BaseController',
    'root/models/model'
], function (oController, oJsonModel) {
    'use strict';



    return oController.extend("root.controller.main", {

        onInit: function () {
            var oModel = oJsonModel.createJsonModel('./models/studentData.json');
            var oModel1 = oJsonModel.createJsonModel('./models/studentData1.json');
            //3 - set data at application 
            this.oCore.setModel(oModel);
            this.oCore.setModel(oModel1, "s1");
            //3rd way displaying data
            this.getView().byId("idSclass").bindValue("s1>/studentData/class");
            this.getView().byId("idsmarks").bindProperty("value", "s1>/studentData/marks");

        },

        // onClick: function (oEvent) {
        //     var defaultModel = this.oCore.getModel();
        //     var NamedModel = this.oCore.getModel("s1");
        //     this.oCore.setModel(NamedModel);
        //     this.oCore.setModel(defaultModel, "s1");


        //     //console.log(this.oCore.getModel().oData);

        // },
        onRowSelectionChange: function(oControlEvent) {
            debugger;
            var oAbsolutePath = oControlEvent.getParameter("rowContext").getPath();
            //get form refernce
            var oForm = this.getView().byId("idForm2");
            //from.rercner - to fill the data - element binding
            oForm.bindElement(oAbsolutePath);

        }
    });
});