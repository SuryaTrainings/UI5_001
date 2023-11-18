sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (oJSONModel) {
    'use strict';

    return {

        createJsonModel: function () {
            var oModel2 = new oJSONModel();

            oModel2.setData({
                "studentData": [
                    {
                        "id": "ID0007",
                        "name": "Mr G",
                        "class": "60",
                        "marks": "600"
                    },
                    {
                        "id": "ID0008",
                        "name": "Mr H",
                        "class": "70",
                        "marks": "700"
                    },
                    {
                        "id": "ID0009",
                        "name": "Mr I",
                        "class": "90",
                        "marks": "900"
                    }

                ]
            })

            return oModel2;

        }
    }
});