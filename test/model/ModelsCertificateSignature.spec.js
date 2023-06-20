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
 * Swagger Codegen version: 2.4.32
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
    describe('ModelsCertificateSignature', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsCertificateSignature();
      });

      it('should create an instance of ModelsCertificateSignature', function() {
        // TODO: update the code to test ModelsCertificateSignature
        expect(instance).to.be.a(SendPostApi.ModelsCertificateSignature);
      });

      it('should have the property serial (base name: "serial")', function() {
        // TODO: update the code to test the property serial
        expect(instance).to.have.property('serial');
        // expect(instance.serial).to.be(expectedValueLiteral);
      });

      it('should have the property serialHex (base name: "serialHex")', function() {
        // TODO: update the code to test the property serialHex
        expect(instance).to.have.property('serialHex');
        // expect(instance.serialHex).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
