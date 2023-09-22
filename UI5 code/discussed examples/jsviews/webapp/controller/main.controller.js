// sap.ui.define([
//     'require',
//     'dependency'
// ], function(require, factory) {
//     'use strict';
    
// });

sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(oController) {
    'use strict';

    return oController.extend("root.controller.main",{
        onPress: function(){
            alert("Button event fired");
        }
    });
    
});