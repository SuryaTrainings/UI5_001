sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (oJSONModel) {
    'use strict';

    return {

        createJsonModel: function () {
            var oModel = new oJSONModel();

            oModel.setData({
                "studentData": [
                    {
                        "id": "ID0001",
                        "name": "Mr A",
                        "class": "10",
                        "marks": "100"
                    },
                    {
                        "id": "ID0002",
                        "name": "Mr B",
                        "class": "20",
                        "marks": "200"
                    },
                    {
                        "id": "ID0003",
                        "name": "Mr C",
                        "class": "30",
                        "marks": "300"
                    }

                ]
            })

            return oModel;

        }
    }
});