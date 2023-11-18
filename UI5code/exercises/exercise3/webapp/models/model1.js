sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (oJSONModel) {
    'use strict';

    return {

        createJsonModel: function () {
            var oModel1 = new oJSONModel();

            oModel1.setData({
                "studentData": [
                    {
                        "id": "ID0004",
                        "name": "Mr D",
                        "class": "40",
                        "marks": "400"
                    },
                    {
                        "id": "ID0005",
                        "name": "Mr E",
                        "class": "50",
                        "marks": "500"
                    },
                    {
                        "id": "ID0006",
                        "name": "Mr F",
                        "class": "60",
                        "marks": "600"
                    }

                ]
            })

            return oModel1;

        }
    }
});