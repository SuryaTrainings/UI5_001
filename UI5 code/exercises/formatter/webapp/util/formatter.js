sap.ui.define([], function () {
    'use strict';
    return {
        getStatusInfo: function (oKey) {
            debugger;
            switch (oKey) {
                case 'Stock':

                    return 'None'
                    // return 'Success'
                    break;
                case 'NoStock':
                    return 'None'
                    // return 'Error'
                    break;
                case 'GoingtoComplete':
                    return 'None'
                    // return 'Warning'
                    break;
                default:
                    return 'None'
                    break;
            }
        }
    }
});