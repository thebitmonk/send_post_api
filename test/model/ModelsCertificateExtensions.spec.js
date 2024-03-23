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
 * Swagger Codegen version: 2.4.39
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
    describe('ModelsCertificateExtensions', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsCertificateExtensions();
      });

      it('should create an instance of ModelsCertificateExtensions', function() {
        // TODO: update the code to test ModelsCertificateExtensions
        expect(instance).to.be.a(SendPostApi.ModelsCertificateExtensions);
      });

      it('should have the property authorityInfoAccess (base name: "authorityInfoAccess")', function() {
        // TODO: update the code to test the property authorityInfoAccess
        expect(instance).to.have.property('authorityInfoAccess');
        // expect(instance.authorityInfoAccess).to.be(expectedValueLiteral);
      });

      it('should have the property authorityKeyIdentifier (base name: "authorityKeyIdentifier")', function() {
        // TODO: update the code to test the property authorityKeyIdentifier
        expect(instance).to.have.property('authorityKeyIdentifier');
        // expect(instance.authorityKeyIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property basicConstraints (base name: "basicConstraints")', function() {
        // TODO: update the code to test the property basicConstraints
        expect(instance).to.have.property('basicConstraints');
        // expect(instance.basicConstraints).to.be(expectedValueLiteral);
      });

      it('should have the property certificatePolicies (base name: "certificatePolicies")', function() {
        // TODO: update the code to test the property certificatePolicies
        expect(instance).to.have.property('certificatePolicies');
        // expect(instance.certificatePolicies).to.be(expectedValueLiteral);
      });

      it('should have the property crlDistributionPoints (base name: "crlDistributionPoints")', function() {
        // TODO: update the code to test the property crlDistributionPoints
        expect(instance).to.have.property('crlDistributionPoints');
        // expect(instance.crlDistributionPoints).to.be(expectedValueLiteral);
      });

      it('should have the property extendedKeyUsage (base name: "extendedKeyUsage")', function() {
        // TODO: update the code to test the property extendedKeyUsage
        expect(instance).to.have.property('extendedKeyUsage');
        // expect(instance.extendedKeyUsage).to.be(expectedValueLiteral);
      });

      it('should have the property keyUsage (base name: "keyUsage")', function() {
        // TODO: update the code to test the property keyUsage
        expect(instance).to.have.property('keyUsage');
        // expect(instance.keyUsage).to.be(expectedValueLiteral);
      });

      it('should have the property subjectKeyIdentifier (base name: "subjectKeyIdentifier")', function() {
        // TODO: update the code to test the property subjectKeyIdentifier
        expect(instance).to.have.property('subjectKeyIdentifier');
        // expect(instance.subjectKeyIdentifier).to.be(expectedValueLiteral);
      });

    });
  });

}));
