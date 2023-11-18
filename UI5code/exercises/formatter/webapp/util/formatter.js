sap.ui.define([], function (require, dependency) {
    'use strict';
    return {
        getStatus: function(oKey) {
            debugger;
            switch(oKey) {
                case 'Stock':
                    // return 'None'
                    return 'Success'
                    break;
                case 'NoStock':
                    // return 'None'
                    return 'Error'
                    break;
                case 'GoingtoComplete':
                    // return 'None'
                    return 'Warning'
                    break;
                default:
                    return 'None'
                    break;
            }
        }
    }
});