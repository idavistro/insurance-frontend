angular.module('InsurancePolizaAPI', ['AjaxService'])

.factory('PolizaAPI', function(Ajax) {
	var instance = {};
	
	instance.brmsURL = 'http://fis.apps.mikeintoch.systems/rest';
	instance.ccURL = 'http://creditcard.apps.mikeintoch.systems/rest'
	instance.marcasURL = 'http://marcas:8080/api';
	instance.pdfURL = 'http://pdf.apps.mikeintoch.systems/api';
	
	instance.calcularPrecio = function (policyRequest, success, error){
		var rest = instance.brmsURL + '/book';
		
		try {
			Ajax.post(rest, policyRequest, success, error);
		} catch (exception) {
			error(exception);
		}
	}
	
	
	instance.comprarPoliza = function(creditCardRequest,success,error){
		var rest = instance.ccURL + '/verify';
		
		try {
			Ajax.post(rest, creditCardRequest, success, error);
		} catch (exception) {
			error(exception);
		}
	}	
	
	instance.loadMarcas = function (success,error) {
		var rest = instance.marcasURL + '/marcas';
		
		try {
			Ajax.get(rest, success, error);
		} catch (exception) {
			error(exception);
		}
	}
	
	instance.createPDF = function (policyRequest,success,error) {
		var rest = instance.pdfURL + '/pdfservice';
		
		try {
			Ajax.post(rest, policyRequest, success, error);
		} catch (exception) {
			error(exception);
		}
	}
	
	return instance;
});
