/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
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
    describe('ModelsRSuppression', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsRSuppression();
      });

      it('should create an instance of ModelsRSuppression', function() {
        // TODO: update the code to test ModelsRSuppression
        expect(instance).to.be.a(SendPostApi.ModelsRSuppression);
      });

      it('should have the property hardBounce (base name: "hardBounce")', function() {
        // TODO: update the code to test the property hardBounce
        expect(instance).to.have.property('hardBounce');
        // expect(instance.hardBounce).to.be(expectedValueLiteral);
      });

      it('should have the property manual (base name: "manual")', function() {
        // TODO: update the code to test the property manual
        expect(instance).to.have.property('manual');
        // expect(instance.manual).to.be(expectedValueLiteral);
      });

      it('should have the property spamComplaint (base name: "spamComplaint")', function() {
        // TODO: update the code to test the property spamComplaint
        expect(instance).to.have.property('spamComplaint');
        // expect(instance.spamComplaint).to.be(expectedValueLiteral);
      });

      it('should have the property unsubscribe (base name: "unsubscribe")', function() {
        // TODO: update the code to test the property unsubscribe
        expect(instance).to.have.property('unsubscribe');
        // expect(instance.unsubscribe).to.be(expectedValueLiteral);
      });

    });
  });

}));
