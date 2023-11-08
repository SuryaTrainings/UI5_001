sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'st/b33/simpleApp/util/formatter'
], function(BaseController,Filter,FilterOperator,Formatter) {
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
         onSerach: function(oEvent){
            debugger;

         //Get Item data
         var oItemData = this.getView().byId("idListData").getBinding("items");
         
         //Get Query String
         var oSearchInput = oEvent.getParameter("newValue");

         //Create Filter 
         var oFilterName = new Filter("CATEGORY", FilterOperator.Contains, oSearchInput );
         var oFilterType = new Filter("type", FilterOperator.Contains, oSearchInput );
         var oFilter = new Filter({
            //filters: [oFilterName, oFilterType],
            filters: [oFilterName],
            and: false
         });

        //Apply filter on dataset
        oItemData.filter([oFilter]);
        },

        onDelete: function(oEvent){
            // Get the selected item
            var oSeletedItem = oEvent.getParameter("listItem"); 
            // Get source / list parent 
            var oList = oEvent.getSource();
            // Remove item from the parent 
            oList.removeItem(oSeletedItem);
        },
        onSelectionChange: function(oEvent){

            //Get the selected item
            var oSelectedItem = oEvent.getParameter("listItem");

            //Extract the item index.
            var oSpath = oSelectedItem.getBindingContextPath();

            debugger;

            //Bind the data to view 2.
            var oView2 = this.getView().getParent().getParent().getDetailPages()[0];

            //Get view2 refernce             
            oView2.bindElement(oSpath,{
                expand: 'To_Supplier'
            });

            this.onNext();
        }
    })
});
