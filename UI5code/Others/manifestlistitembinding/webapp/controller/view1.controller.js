sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(BaseController, Filter, FilterOperator) {
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
        onSearch: function(oEvent){
            //What user looking for
            var oSearchValue = oEvent.getParameter("query");
            //Apply filter
            var oFilterName = new Filter("name", FilterOperator.Contains, oSearchValue );
            var oFilterType = new Filter("type", FilterOperator.Contains, oSearchValue );
            var oFilter = new Filter({
                filters: [oFilterName, oFilterType],
                and: false
            });
            //Get item binding
            var OBindingItems = this.getView().byId("idList").getBinding("items"); 
            //Inject the filter with update items.
            OBindingItems.filter([oFilter]);
        }
    })
});