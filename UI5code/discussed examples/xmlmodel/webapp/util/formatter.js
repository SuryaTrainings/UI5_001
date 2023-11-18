sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(oNumberFormat) {
    'use strict';
    return {
        toUpperCase: function(input){
            debugger;
            return input.toUpperCase();
        },
        toFormattedAmount: function(input1, input2){
            debugger;
            var oCurrencyFormat = oNumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(input1, input2);
        }
    }
});