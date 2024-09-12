/*
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ModelsTaxDetails', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsTaxDetails();
      });

      it('should create an instance of ModelsTaxDetails', function() {
        // TODO: update the code to test ModelsTaxDetails
        expect(instance).to.be.a(SendPostApi.ModelsTaxDetails);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property percentageDecimal (base name: "percentage_decimal")', function() {
        // TODO: update the code to test the property percentageDecimal
        expect(instance).to.have.property('percentageDecimal');
        // expect(instance.percentageDecimal).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property taxType (base name: "tax_type")', function() {
        // TODO: update the code to test the property taxType
        expect(instance).to.have.property('taxType');
        // expect(instance.taxType).to.be(expectedValueLiteral);
      });

    });
  });

}));
