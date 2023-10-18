sap.ui.define([
    'st/b33/SimpleApp/controller/BaseController',
    'sap/ui/core/Fragment'
], function(BaseController,Fragment) {
    'use strict';
    return BaseController.extend("st.b33.SimpleApp.controller.view2",{

        onBack:function(){
            var oView=this.getView();
            var oAppcon=oView.getParent();
            oAppcon.to("idView1");
        },

       getValueRequest:function(){
            
            //alert("popup working successfully");
            this.onFilter();
        },

        supplierpopup:null,
onFilter:function(){
//alert("popup working successfully");
var that;
that=this;

if(!this.supplierpopup ){
            Fragment.load({
                id:"supplier",
                name: "st.b33.SimpleApp.fragments.popup",
                controller: this
            }).then(function(oFragment){
                that.supplierpopup=oFragment;
               that.supplierpopup.open();
            });
        }else{
            that.supplierpopup.open();
        }
               
            
           
        }
       

    })
});