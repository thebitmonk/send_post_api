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
 * Swagger Codegen version: 2.4.23
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
    describe('ModelsEmailResponse', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEmailResponse();
      });

      it('should create an instance of ModelsEmailResponse', function() {
        // TODO: update the code to test ModelsEmailResponse
        expect(instance).to.be.a(SendPostApi.ModelsEmailResponse);
      });

      it('should have the property errorCode (base name: "errorCode")', function() {
        // TODO: update the code to test the property errorCode
        expect(instance).to.have.property('errorCode');
        // expect(instance.errorCode).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property messageId (base name: "messageId")', function() {
        // TODO: update the code to test the property messageId
        expect(instance).to.have.property('messageId');
        // expect(instance.messageId).to.be(expectedValueLiteral);
      });

      it('should have the property submittedAt (base name: "submittedAt")', function() {
        // TODO: update the code to test the property submittedAt
        expect(instance).to.have.property('submittedAt');
        // expect(instance.submittedAt).to.be(expectedValueLiteral);
      });

      it('should have the property to (base name: "to")', function() {
        // TODO: update the code to test the property to
        expect(instance).to.have.property('to');
        // expect(instance.to).to.be(expectedValueLiteral);
      });

    });
  });

}));
