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
    describe('ModelsCertificateIssuer', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsCertificateIssuer();
      });

      it('should create an instance of ModelsCertificateIssuer', function() {
        // TODO: update the code to test ModelsCertificateIssuer
        expect(instance).to.be.a(SendPostApi.ModelsCertificateIssuer);
      });

      it('should have the property commonName (base name: "commonName")', function() {
        // TODO: update the code to test the property commonName
        expect(instance).to.have.property('commonName');
        // expect(instance.commonName).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property organization (base name: "organization")', function() {
        // TODO: update the code to test the property organization
        expect(instance).to.have.property('organization');
        // expect(instance.organization).to.be(expectedValueLiteral);
      });

      it('should have the property organizationUnit (base name: "organizationUnit")', function() {
        // TODO: update the code to test the property organizationUnit
        expect(instance).to.have.property('organizationUnit');
        // expect(instance.organizationUnit).to.be(expectedValueLiteral);
      });

    });
  });

}));
