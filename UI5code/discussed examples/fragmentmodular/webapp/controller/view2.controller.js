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
        oValueHelp:function(){
            alert("Pop code work in progress.");
        },
        
        supplierPopUp: null,

        onFilter: function(){

            var that;

            that = this;

            if( ! this.supplierPopUp ){

            Fragment.load({
                id:"supplier",
                name:"st.b33.simpleApp.fragments.popup",
                controller: this
            }).then(function(oFragment){
                that.supplierPopUp = oFragment;
                that.supplierPopUp.open();
            });    
        }else{
            this.supplierPopUp.open();
        }
        }

    })
});