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
    describe('ModelsSMTPAuthCompleted', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsSMTPAuthCompleted();
      });

      it('should create an instance of ModelsSMTPAuthCompleted', function() {
        // TODO: update the code to test ModelsSMTPAuthCompleted
        expect(instance).to.be.a(SendPostApi.ModelsSMTPAuthCompleted);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property subAccountId (base name: "subAccountId")', function() {
        // TODO: update the code to test the property subAccountId
        expect(instance).to.have.property('subAccountId');
        // expect(instance.subAccountId).to.be(expectedValueLiteral);
      });

    });
  });

}));
