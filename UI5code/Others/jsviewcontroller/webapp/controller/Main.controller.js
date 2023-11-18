//Technical name of this syntax - Scaffolding syntax or AMD like syntax 
// AMD - Asynchronus module definiation
sap.ui.define([
    // require - standard modules
    // 'require',
    // dependecies - local dependencies 
    // 'dependency'
    'sap/ui/core/mvc/Controller'
    // It will these depedencies and required modules asynchronus. 
// ], function(require, factory) {
], function(Controller) {
    'use strict';
    //We are inheriting from satandard sap class as a child class
    //extend is the keyword in JS to create inheritence
    return Controller.extend("root.controller.Main",{
        onPress: function(){
            alert("Button presses");
        }
    });
});