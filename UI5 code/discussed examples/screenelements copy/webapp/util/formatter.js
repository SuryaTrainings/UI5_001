sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function (oNumberFormat) {
    'use strict';
    return {
        convert2UpperCase: function (oInput) {
            debugger;
            if (oInput) {
                return oInput.toUpperCase();
            }
        },
        toFormattedAmount: function (input1, input2) {
            debugger;
            var oCurrencyFormat = oNumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(input1, input2);
        }
    }
});