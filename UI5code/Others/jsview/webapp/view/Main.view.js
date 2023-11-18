sap.ui.jsview("root.view.Main",{

    //Get controller name
    getControllerName: function(){
        
    },

    //UI Elements section
    //Return object for controller class from line no 5.
    createContent:function(){
        var oBtn = new sap.m.Button("idBtn",{
            text: "first UI5 Button",
            type: "Accept",
            press: function(){
                alert("Welcome to UI5 class");
            }
        });

        return oBtn;
    }
});
