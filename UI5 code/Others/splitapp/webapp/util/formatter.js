sap.ui.define([
], function () {
    'use strict';
    return {
        getStatus: function (key) {
            switch (key) {
                case "Stock":
                    return "Success"
                    break;

                case "noStock":
                    return "Error"
                    break;


                case "GoingtoComplete":
                    return "Warning"
                    break;
                default:
                    break;
            }
        }
    }
});