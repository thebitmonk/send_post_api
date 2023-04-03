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
    describe('ModelsSSLCertificate', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsSSLCertificate();
      });

      it('should create an instance of ModelsSSLCertificate', function() {
        // TODO: update the code to test ModelsSSLCertificate
        expect(instance).to.be.a(SendPostApi.ModelsSSLCertificate);
      });

      it('should have the property details (base name: "details")', function() {
        // TODO: update the code to test the property details
        expect(instance).to.have.property('details');
        // expect(instance.details).to.be(expectedValueLiteral);
      });

      it('should have the property fingerprint (base name: "fingerprint")', function() {
        // TODO: update the code to test the property fingerprint
        expect(instance).to.have.property('fingerprint');
        // expect(instance.fingerprint).to.be(expectedValueLiteral);
      });

      it('should have the property found (base name: "found")', function() {
        // TODO: update the code to test the property found
        expect(instance).to.have.property('found');
        // expect(instance.found).to.be(expectedValueLiteral);
      });

      it('should have the property nameMatch (base name: "nameMatch")', function() {
        // TODO: update the code to test the property nameMatch
        expect(instance).to.have.property('nameMatch');
        // expect(instance.nameMatch).to.be(expectedValueLiteral);
      });

      it('should have the property validPeer (base name: "validPeer")', function() {
        // TODO: update the code to test the property validPeer
        expect(instance).to.have.property('validPeer');
        // expect(instance.validPeer).to.be(expectedValueLiteral);
      });

    });
  });

}));
