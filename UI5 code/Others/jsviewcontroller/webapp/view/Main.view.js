sap.ui.jsview("root.view.Main",{

    //Get controller name
    getControllerName: function(){
        return "root.controller.Main"
    },
    //UI Elements section
    //From line no 4 - object will be created for controller
    createContent:function(oController){
        var oBtn = new sap.m.Button("idBtn",{
            text: "first UI5 Button",
            type: "Accept",
            press: oController.onPress
            }
        );
        return oBtn;
    }
});
