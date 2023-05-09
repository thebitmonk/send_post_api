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
 * Swagger Codegen version: 2.4.31
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
    describe('ModelsTo', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsTo();
      });

      it('should create an instance of ModelsTo', function() {
        // TODO: update the code to test ModelsTo
        expect(instance).to.be.a(SendPostApi.ModelsTo);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property cc (base name: "cc")', function() {
        // TODO: update the code to test the property cc
        expect(instance).to.have.property('cc');
        // expect(instance.cc).to.be(expectedValueLiteral);
      });

      it('should have the property bcc (base name: "bcc")', function() {
        // TODO: update the code to test the property bcc
        expect(instance).to.have.property('bcc');
        // expect(instance.bcc).to.be(expectedValueLiteral);
      });

      it('should have the property customFields (base name: "customFields")', function() {
        // TODO: update the code to test the property customFields
        expect(instance).to.have.property('customFields');
        // expect(instance.customFields).to.be(expectedValueLiteral);
      });

    });
  });

}));
