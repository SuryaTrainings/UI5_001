sap.ui.define([
    // "sap/ui/core/mvc/Controller",
    "root/controller/baseController",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "root/models/model",
    "root/models/model1",
    "root/models/model2"
], function (oBaseController, oController, oMessageToast, oModel, oModel1, oModel2) {
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
            var oStudModel = new sap.ui.model.json.JSONModel();
            var oModelN = oModel.createJsonModel();
            var oModelN1 = oModel1.createJsonModel();
            var oModelN2 = oModel2.createJsonModel();

            // Fill object with data 


            // Set data at application level to the view 
            // this.oCore.setModel(oStudModel);

            // studentInfo: {};
            // rbtnText:"";
            studentInfo = {};

            var oRbtn1 = this.getView().byId("idRbtn1");
            if (oRbtn1.getSelected() == true) {
                rbtnText = oRbtn1.getText();
                rbtnText = rbtnText - 1;                 
                studentInfo = oModelN.oData.studentData[rbtnText];                
            } else {
                var oRbtn2 = this.getView().byId("idRbtn2");
                if(oRbtn2.getSelected() == true ){
                    rbtnText = oRbtn2.getText();
                    rbtnText = rbtnText - 1;                 
                    studentInfo = oModelN1.oData.studentData[rbtnText];                    
                }else{
                    var oRbtn3 = this.getView().byId("idRbtn3");
                    if(oRbtn3.getSelected() == true ){
                        rbtnText = oRbtn3.getText();
                        rbtnText = rbtnText - 1;                 
                        studentInfo = oModelN2.oData.studentData[rbtnText];                          
                    }
                };
            };

            // rbtnText = rbtnText - 1;                 
            // studentInfo = oModelN.oData.studentData[rbtnText];

            oStudModel.setData({
                "studInfo":{
                    "id":studentInfo.id,
                    "name":studentInfo.name,
                    "class":studentInfo.class,
                    "marks":studentInfo.marks
                }
            })

            this.oCore.setModel(oStudModel)

            // Other way of displaying setData
            this.getView().byId("idIdInp").bindValue("/studInfo/id")
            this.getView().byId("idNameInp").bindValue("/studInfo/name")            
            this.getView().byId("idClassInp").bindValue("/studInfo/class")
            this.getView().byId("idMarksInp").bindValue("/studInfo/marks")

        },

    })

});