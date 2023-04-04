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
    describe('ModelsDomainCheckResult', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsDomainCheckResult();
      });

      it('should create an instance of ModelsDomainCheckResult', function() {
        // TODO: update the code to test ModelsDomainCheckResult
        expect(instance).to.be.a(SendPostApi.ModelsDomainCheckResult);
      });

      it('should have the property dmarcPresent (base name: "dmarcPresent")', function() {
        // TODO: update the code to test the property dmarcPresent
        expect(instance).to.have.property('dmarcPresent');
        // expect(instance.dmarcPresent).to.be(expectedValueLiteral);
      });

      it('should have the property domainAge (base name: "domainAge")', function() {
        // TODO: update the code to test the property domainAge
        expect(instance).to.have.property('domainAge');
        // expect(instance.domainAge).to.be(expectedValueLiteral);
      });

      it('should have the property domainBlackList (base name: "domainBlackList")', function() {
        // TODO: update the code to test the property domainBlackList
        expect(instance).to.have.property('domainBlackList');
        // expect(instance.domainBlackList).to.be(expectedValueLiteral);
      });

      it('should have the property domainSSL (base name: "domainSSL")', function() {
        // TODO: update the code to test the property domainSSL
        expect(instance).to.have.property('domainSSL');
        // expect(instance.domainSSL).to.be(expectedValueLiteral);
      });

      it('should have the property spfPresent (base name: "spfPresent")', function() {
        // TODO: update the code to test the property spfPresent
        expect(instance).to.have.property('spfPresent');
        // expect(instance.spfPresent).to.be(expectedValueLiteral);
      });

    });
  });

}));
