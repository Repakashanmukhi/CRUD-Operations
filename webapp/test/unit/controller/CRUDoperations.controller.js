/*global QUnit*/

sap.ui.define([
	"odata/controller/CRUDoperations.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CRUDoperations Controller");

	QUnit.test("I should test the CRUDoperations controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
