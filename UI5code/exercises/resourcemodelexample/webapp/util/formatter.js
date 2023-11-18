sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(oNumberFormat) {
    
    'use strict';
    
    return {
        
        toCapitalLetters: function(input){
            
            if(input){
            return input.toUpperCase();
            }
            
        },
        toFormattedAmount: function(input1, input2){
            
            var oCurrencyFormat = oNumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(input1, input2);
        }
    }
});