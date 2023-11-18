sap.ui.define([
    "st/b33/SimpleApp/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "st/b33/SimpleApp/util/formatter"
], function(BaseController,Filter,FilterOperator, Formatter) {
    'use strict';
    return BaseController.extend("st.b33.SimpleApp.controller.view1",{

        oFormatter:Formatter,

        onNext:function(){
            var oView=this.getView();
            var oAppcon=oView.getParent();
            oAppcon.to("idView2");
        },
        onSearch:function(oEvent){
            debugger;
            //Get ItemData
            var oItemData=this.getView().byId("idList").getBinding("items");
            var searchInput=oEvent.getParameter("query");
            var oFilterName=new Filter("name",FilterOperator.Contains,searchInput);
            var oFilterType=new Filter("type",FilterOperator.Contains,searchInput);
            var oFilter=new Filter({
                filters: [oFilterName,oFilterType],
                and: false
            });
            //Apply Filter
            oItemData.filter([oFilter]);
        },
        onliveChange:function(oEvent){
        var oItemData=this.getView().byId("idList").getBinding("items");
            var searchInput=oEvent.getParameter("newValue");
            var oFilterName=new Filter("name",FilterOperator.Contains,searchInput);
            var oFilterType=new Filter("type",FilterOperator.Contains,searchInput);
            var oFilter=new Filter({
                filters: [oFilterName,oFilterType],
                and: false
            });
            //Apply Filter
            oItemData.filter([oFilter]);

        },
        onDelete:function(oEvent){
            debugger;
            //get the selected item
            var oSelectedItem=oEvent.getParameter("listItem");
            //get source
            var oList=oEvent.getSource();
            //delete item from the parent
            oList.removeItem(oSelectedItem);
        },
        onSelectionChange:function(oEvent){
            //get the selected item
            var oSelectedItem=oEvent.getParameter("listItem");
            //extract the item index
            var oSpath=oSelectedItem.getBindingContextPath();
           //bind the data to view2
            var oView2=this.getView().getParent().getPages()[1];
            //get the view2 reference
            oView2.bindElement(oSpath);
            this.onNext();
        }
       
    })
});