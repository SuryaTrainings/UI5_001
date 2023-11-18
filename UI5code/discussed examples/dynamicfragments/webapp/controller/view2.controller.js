sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'st/b33/simpleApp/util/formatter',
    'sap/ui/core/Fragment'

], function (BaseController, Formatter, Fragment) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.view2", {
        oFormatter: Formatter,
        onBack: function () {
            var oView = this.getView();
            var oAppCon = oView.getParent();

            // Navigate to child object
            //Get child 2 id name 
            oAppCon.to("idView1");
        },


        citiesPopUp: null,
        oCitiName: null,

        oValueHelp: function (oEvent) {
            debugger;
            var that;

            that = this;

            this.oCitiName = oEvent.getSource();

            if (!this.citiesPopUp) {

                Fragment.load({
                    id: "cities",
                    name: "st.b33.simpleApp.fragments.popup",
                    controller: this
                }).then(function (oFragment) {
                    that.citiesPopUp = oFragment;
                    that.citiesPopUp.setTitle("Cities popup");
                    that.citiesPopUp.setMultiSelect(false);
                    that.getView().addDependent(that.citiesPopUp);
                    //Connect model to the fragment 
                    that.citiesPopUp.bindAggregation("items", {
                        //This is absoulte path 
                        path: "/Cities",
                        //Item data with relative path 
                        template: new sap.m.DisplayListItem({
                            label: "{CityName}",
                            value: "{FamousFor}"
                        })
                    });
                    that.citiesPopUp.open();
                });
            } else {
                this.citiesPopUp.open();
            }
        },

        supplierPopUp: null,

        onFilter: function () {
            var that;
            that = this;
            if (!this.supplierPopUp) {
                Fragment.load({
                    id: "supplier",
                    name: "st.b33.simpleApp.fragments.popup",
                    controller: this
                }).then(function (oFragment) {
                    //Object Created
                    that.supplierPopUp = oFragment;
                    //Set title
                    that.supplierPopUp.setTitle("Supplier popup");
                    //Saying to view this fragment is dependent to display my data
                    that.getView().addDependent(that.supplierPopUp);
                    //Connect model to the fragment 
                    that.supplierPopUp.bindAggregation("items", {
                        //This is absoulte path 
                        path: "/Suppliers",
                        //Item data with relative path 
                        template: new sap.m.DisplayListItem({
                            label: "{name}",
                            value: "{sinceWhen}"
                        })
                    });
                    that.supplierPopUp.open();
                });
            } else {
                this.supplierPopUp.open();
            }
        },
        onPopupConfirm: function (oEvent) {
            if (oEvent.getSource().getId().indexOf("citi") != -1) {
                var oWhichItemIsSelected = oEvent.getParameter("selectedItem");
                var oSelectedCitiName = oWhichItemIsSelected.getLabel();
                this.oCitiName.setValue(oSelectedCitiName);
            }
            if (oEvent.getSource().getId().indexOf("supplier") != -1) {

                var filters = [];

                //1 - get selected items
                var oSelectedItems = oEvent.getParameter("selectedItems"); 
                //2 - Get table entries 
                var oTable = this.getView().byId("idTable").getItems();
                //3 - Apply for each statement, to push data to table data.
                // oSelectedItems.forEach(element => {
                // //4 - Inject item
                    // oSelectedItems.forEach(element => {
                    // oTable[element.getBinding]    
                    // });
                // }); 
                debugger;
                if( oSelectedItems.length > 0){
                    $.each( oSelectedItems, function(i, UIitem){
                        filters.push(
                            new sap.ui.model.Filter(
                                "name", sap.ui.model.FilterOperator.EQ, UIitem.getLabel() )
                        )
                    } )
                }
                debugger;
                this.getView().byId("idTable").getBinding("items").filter(filters);
            }
            
        }
    })
});