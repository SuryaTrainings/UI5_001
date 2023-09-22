sap.ui.jsview("root.view.main",{
    getControllerName: function(){
        return "root.controller.main";
    },
    createContent: function(oController){
        var oBtn = new sap.m.Button("idBtn",{
            text: "JS View button",
            press: oController.onPress
        });

        return oBtn;
    }
}
);