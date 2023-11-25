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
 * Swagger Codegen version: 2.4.37
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
    describe('ModelsCertificateSubject', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsCertificateSubject();
      });

      it('should create an instance of ModelsCertificateSubject', function() {
        // TODO: update the code to test ModelsCertificateSubject
        expect(instance).to.be.a(SendPostApi.ModelsCertificateSubject);
      });

      it('should have the property alternativeNames (base name: "alternativeNames")', function() {
        // TODO: update the code to test the property alternativeNames
        expect(instance).to.have.property('alternativeNames');
        // expect(instance.alternativeNames).to.be(expectedValueLiteral);
      });

      it('should have the property commonName (base name: "commonName")', function() {
        // TODO: update the code to test the property commonName
        expect(instance).to.have.property('commonName');
        // expect(instance.commonName).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));
