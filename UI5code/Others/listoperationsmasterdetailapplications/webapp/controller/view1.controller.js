sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(BaseController,Filter,FilterOperator) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.view1",{
        onNext: function(){
            // get parent object
            var oView = this.getView();
            var oAppCon = oView.getParent();

            // Navigate to child object
            //Get child 2 id name 
            oAppCon.to("idView2");

        },
        // onSerach: function(oEvent){
        //     debugger;

        //  //Get Item data
        //  var oItemData = this.getView().byId("idListData").getBinding("items");
         
        //  //Get Query String
        //  var oSearchInput = oEvent.getParameter("query");

        //  //Create Filter 
        //  var oFilterName = new Filter("name", FilterOperator.Contains, oSearchInput );
        //  var oFilterType = new Filter("type", FilterOperator.Contains, oSearchInput );
        //  var oFilter = new Filter({
        //     filters: [oFilterName, oFilterType],
        //     and: false
        //  });

        // //Apply filter on dataset
        // oItemData.filter([oFilter]);
        // }
        onSearch: function(oEvent){
            debugger;

         //Get Item data
         var oItemData = this.getView().byId("idListData").getBinding("items");
         
         //Get Query String
         var oSearchInput = oEvent.getParameter("newValue");

         //Create Filter 
         var oFilterName = new Filter("name", FilterOperator.Contains, oSearchInput );
         var oFilterType = new Filter("type", FilterOperator.Contains, oSearchInput );
         var oFilter = new Filter({
            filters: [oFilterName, oFilterType],
            and: false
         });

        //Apply filter on dataset
        oItemData.filter([oFilter]);
        },
        onItemDelete: function(oEvent){
            debugger;
            //Get which item is selected
            var oSelectedItem = oEvent.getParameter("listItem");
            //Get list of items 
            var  oList = oEvent.getSource();
            //Delete selected item from list
            oList.removeItem(oSelectedItem);    
        },
        onSelectionChange: function(oEvent){
        //Get selected item
        var oSelectedItem = oEvent.getParameter("listItem");
        debugger;
        //Get selected item path
        var oSelectedItemPath = oSelectedItem.getBindingContextPath();
        //Get view 2 object
        var oView2 = this.getView().getParent().getPages()[1];
        //Bind data to view2
        oView2.bindElement(oSelectedItemPath);
            
        this.onNext();
        }
    })
});