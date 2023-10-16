sap.ui.define([
    'sap/ui/core/UIComponent'
],function(UIComponent){
    return UIComponent.extend("st.b33.SimpleApp.Component",{
//1.MetaData
metadata:{
    manifest:"json"
},

//2.Init
init:function(){
    sap.ui.core.UIComponent.prototype.init.apply(this);
},


//3.Load Data

createContent:function(){
    var oAppView = new sap.ui.view("idMain",{
        viewName: "st.b33.SimpleApp.view.App",
        type: "XML"
    });
   
    var oAppView1 = new sap.ui.view("idView1",{
        viewName: "st.b33.SimpleApp.view.view1",
        type: "XML"
    });
    var oAppView2 = new sap.ui.view("idView2",{
        viewName: "st.b33.SimpleApp.view.view2",
        type: "XML"
    });


    var oAppContainer=oAppView.byId("idApp");
    oAppContainer.addPage(oAppView1);
    oAppContainer.addPage(oAppView2);
   
   
    return oAppView;
},


//4.Destory
destory:function(){

}
    });
});