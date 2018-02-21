angular.module('InsurancePolizaAPI', ['AjaxService'])

.factory('PolizaAPI', function(Ajax) {
	var instance = {};
	
	instance.brmsURL = 'http://fis.openshift37rh.flnet.org/rest';
	instance.ccURL = 'http://creditcard.openshift37rh.flnet.org/rest'
	instance.marcasURL = 'http://marcas.openshift37rh.flnet.org/api';
	instance.pdfURL = 'http://pdf.openshift37rh.flnet.org/api';
	
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
