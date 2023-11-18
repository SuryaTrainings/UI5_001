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
        onSerach: function(oEvent){
            debugger;

         //Get Item data
         var oItemData = this.getView().byId("idListData").getBinding("items");
         
         //Get Query String
         var oSearchInput = oEvent.getParameter("query");

         //Create Filter 
         var oFilterName = new Filter("name", FilterOperator.Contains, oSearchInput );
         var oFilterType = new Filter("type", FilterOperator.Contains, oSearchInput );
         var oFilter = new Filter({
            filters: [oFilterName, oFilterType],
            and: false
         });

        //Apply filter on dataset
        oItemData.filter([oFilter]);
        }
    })
});