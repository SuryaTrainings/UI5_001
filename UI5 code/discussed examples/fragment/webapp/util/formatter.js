sap.ui.define([
], function (require, factory) {
    'use strict';
    return {
        getStatus: function (oKey) {
            debugger;
            switch (oKey) {
                case 'Stock':
                    return 'Success'
                    break;
                case 'noStock':
                    return 'Error'
                    break;
                case 'GoingtoComplete':
                    return 'Warning'
                    break;

                default:
                    break;
            }
        }
    }
});