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
 * Swagger Codegen version: 2.4.41
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
    describe('ModelsPaymentAddress', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsPaymentAddress();
      });

      it('should create an instance of ModelsPaymentAddress', function() {
        // TODO: update the code to test ModelsPaymentAddress
        expect(instance).to.be.a(SendPostApi.ModelsPaymentAddress);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property line1 (base name: "line1")', function() {
        // TODO: update the code to test the property line1
        expect(instance).to.have.property('line1');
        // expect(instance.line1).to.be(expectedValueLiteral);
      });

      it('should have the property line2 (base name: "line2")', function() {
        // TODO: update the code to test the property line2
        expect(instance).to.have.property('line2');
        // expect(instance.line2).to.be(expectedValueLiteral);
      });

      it('should have the property postalCode (base name: "postalCode")', function() {
        // TODO: update the code to test the property postalCode
        expect(instance).to.have.property('postalCode');
        // expect(instance.postalCode).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

    });
  });

}));
