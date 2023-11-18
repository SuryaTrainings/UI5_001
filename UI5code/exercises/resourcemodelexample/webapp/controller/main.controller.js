sap.ui.define([
    'root/controller/BaseController',
    'root/models/model',
    'root/util/formatter'
], function (oController, oModel,oFormatter) {
    'use strict';



    return oController.extend("root.controller.main", {
          
        FormatterMethod: oFormatter,

        onInit: function () {
            debugger;
            var oModel1 = oModel.createJsonModel('./models/studentData.json');
            var oModel2 = oModel.createJsonModel('./models/studentData1.json');
            var oModel3=oModel.createResourceModel();
            //3 - set data at application 
            this.oCore.setModel(oModel1);
            this.oCore.setModel(oModel2, "s1");
            this.oCore.setModel(oModel3, "i18n");

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
            var oAbsolutePath = oControlEvent.getParameter("rowContext").getPath();
            //get form refernce
            var oForm = this.getView().byId("idForm2");
            //from.rercner - to fill the data - element binding
            oForm.bindElement(oAbsolutePath);

        }
    });
});