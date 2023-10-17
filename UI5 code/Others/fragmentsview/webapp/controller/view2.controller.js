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
        onValueHelpRequest: function(){
            alert("Value help triggered.");
        }

    })
});