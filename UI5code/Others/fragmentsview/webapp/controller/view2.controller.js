sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'st/b33/simpleApp/util/formatter',
    'sap/ui/core/Fragment'
], function(BaseController, Formatter, Fragment) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.view2",{
        oFormatter:Formatter,
        onBack: function(){
            var oView = this.getView();
            var oAppCon = oView.getParent();

            // Navigate to child object
            //Get child 2 id name 
            oAppCon.to("idView1");
        },

        supplierPopup: null,

        onFilter:function(){
            debugger;
            var that = this;

            if(!this.supplierPopup){
            Fragment.load({
                id: 'supplier',
                name: 'st.b33.simpleApp.fragments.popup',
                controller: this
                })
                .then(function(oFragment){
                    that.supplierPopup = oFragment; 
                    that.supplierPopup.setTitle('Suppliers'); 
                    that.getView().addDependent(that.supplierPopup);
                    that.supplierPopup.bindAggregation("items",{
                        path: '/Suppliers',
                        template: new sap.m.DisplayListItem({
                            label: '{name}',
                            value:'{sinceWhen}'
                        })
                    });
                    that.supplierPopup.open();
            });}else{
                 this.supplierPopup.open();
            }
        },

        citiesPopup: null,
        oCitiField: null,

        onPopupConfirm:function(oEvent){
            var oWhichItemIsSelected = oEvent.getParameter("selectedItem");
            var sLabel  = oWhichItemIsSelected.getLabel();

            if(oEvent.getSource().getId().indexOf("Cities") != -1 ){
            this.oCitiField.setValue(sLabel);
        }
        },
        onValueHelpRequest: function(oEvent){
            alert("Value help triggered.");
            debugger;
            var that = this;
            this.oCitiField = oEvent.getSource();
            if(!this.citiesPopup){
            Fragment.load({
                id: 'Cities',
                name: 'st.b33.simpleApp.fragments.popup',
                controller: this
                })
                .then(function(oFragment){
                    that.citiesPopup = oFragment; 
                    that.citiesPopup.setTitle('Cities'); 
                    that.citiesPopup.setMultiSelect(false);
                    that.getView().addDependent(that.citiesPopup);
                    that.citiesPopup.bindAggregation("items",{
                        path: '/Cities',
                        template: new sap.m.DisplayListItem({
                            label: '{CityName}',
                            value:'{State}'
                        })
                    });
                    that.citiesPopup.open();
            });}else{
                 this.citiesPopup.open();
            }
        }

    })
});