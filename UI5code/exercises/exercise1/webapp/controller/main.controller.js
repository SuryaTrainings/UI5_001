sap.ui.define([
    // "sap/ui/core/mvc/Controller",
    "root/controller/baseController",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (oBaseController, oController, oMessageToast) {
    return oBaseController.extend("root.controller.main", {
        // x:777,

        onInit: function () {
            studentInfo: {};
            rbtnText:"";
        },

        onBeforeRendering: function () {
            // this.getView().byId("idInp").setValue(this.x);

        },

        onAfterRendering: function () {
            // $("#idView--idForm").fadeOut(5000).fadeIn(5000);

        },

        onExit: function () {
            
        },

        onPress: function (oEvent) {
            // Create empty object
            var oModel = new sap.ui.model.json.JSONModel();

            // Fill object with data 
            oModel.setData({
                "studentData": [
                    {
                    "id": "ID0001",
                    "name": "Mr A",
                    "class": "10",
                    "marks": "700"
                },
                {
                    "id": "ID0002",
                    "name": "Mr B",
                    "class": "20",
                    "marks": "800"
                },
                {
                    "id": "ID0003",
                    "name": "Mr C",
                    "class": "30",
                    "marks": "900"
                }                 
            
            ]
            });

            // Set data at application level to the view 
            this.oCore.setModel(oModel);

            // studentInfo: {};
            // rbtnText:"";
            studentInfo = {};

            var oRbtn1 = this.getView().byId("idRbtn1");
            if (oRbtn1.getSelected() == true) {
                rbtnText = oRbtn1.getText();
            } else {
                var oRbtn2 = this.getView().byId("idRbtn2");
                if(oRbtn2.getSelected() == true ){
                    rbtnText = oRbtn2.getText();
                }else{
                    var oRbtn3 = this.getView().byId("idRbtn3");
                    if(oRbtn3.getSelected() == true ){
                        rbtnText = oRbtn3.getText();
                    }
                };
            };

            rbtnText = rbtnText - 1;                 
            studentInfo = oModel.oData.studentData[rbtnText];

            // Other way of displaying setData
            this.getView().byId("idIdInp").setValue(studentInfo.id)
            this.getView().byId("idNameInp").setValue(studentInfo.name)            
            this.getView().byId("idClassInp").setValue(studentInfo.class)
            this.getView().byId("idMarksInp").setValue(studentInfo.marks)

        },

    })

});