sap.ui.define([
    'sap/ui/model/json/JSONModel'
], function (oJSONModel) {
    'use strict';

    return {
        createJsonModel: function (filePath) {
            var oModel = new oJSONModel;
            //2 - fill this empty object with some data.
            // oModel.setData({
            //     "studentData": {
            //         "id": "ID0001",
            //         "name": "Mr ABC",
            //         "class": "10",
            //         "marks": "670"
            //     }
            // });

            oModel.loadData(filePath);
            return oModel;
        }
    }

});