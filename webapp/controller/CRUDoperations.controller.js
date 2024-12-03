sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/core/Fragment",
], function (Controller, MessageToast, ODataModel,Fragment) {
    "use strict";
    return Controller.extend("odata.controller.CRUDoperations", {
        onInit: function () {
            
        },
        onAddNewRecord: function () {
            if (!this._oDialog) {
                this._oDialog = sap.ui.xmlfragment("odata.controller.CRUDoperations.Fragments.Create", this);
                this.getView().addDependent(this._oDialog);
            }
            this._oDialog.open();
        },
        onSubmitRecord: function () {
            var oDialog = this._oDialog;
            var oModel = this.getView().getModel();
            var oData = {
                ID: this.byId("idInput").getValue(),
                FirstName: this.byId("firstNameInput").getValue(),
                LastName: this.byId("lastNameInput").getValue(),
                Phone: this.byId("phoneInput").getValue(),
                Department: this.byId("departmentInput").getValue(),
                Position: this.byId("positionInput").getValue(),
                JoiningDate: this.byId("joiningDateInput").getValue()
            };
            oModel.create("/EmployeeInfo", oData, {
                success: function () {
                    MessageToast.show("Employee record added successfully.");
                    oDialog.close();
                },
                error: function () {
                    MessageToast.show("Error adding employee record.");
                }
            });
        },
        onCancelRecord: function () {
            var oDialog = this._oDialog;
            if (oDialog) {
                oDialog.close();
            }
        }
    });
});


