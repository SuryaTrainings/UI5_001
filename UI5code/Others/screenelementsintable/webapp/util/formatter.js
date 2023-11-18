sap.ui.define(['sap/ui/core/format/NumberFormat'
], function (oNumberFormat) {
    'use strict';
    return {
        getConvertedName: function (input) {
            if(input){
                return input.toUpperCase();
            }
        },
        getFormattedAmount: function(input1, input2){
            var oCurrencyFormat = oNumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(input1,input2);
        }
    }
});