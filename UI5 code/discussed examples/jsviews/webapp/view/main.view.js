sap.ui.view("root.view.main",{
    getControllerName: function(){

    },
    createContent: function(){
        var oBtn = new sap.m.Button("idBtn",{
            text: "JS View button"
        });

        return oBtn;
    }
}
);