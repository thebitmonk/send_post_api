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
 * Swagger Codegen version: 2.4.43
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
    describe('ModelsHubspotEmailProperties', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsHubspotEmailProperties();
      });

      it('should create an instance of ModelsHubspotEmailProperties', function() {
        // TODO: update the code to test ModelsHubspotEmailProperties
        expect(instance).to.be.a(SendPostApi.ModelsHubspotEmailProperties);
      });

      it('should have the property hsCreatedate (base name: "hs_createdate")', function() {
        // TODO: update the code to test the property hsCreatedate
        expect(instance).to.have.property('hsCreatedate');
        // expect(instance.hsCreatedate).to.be(expectedValueLiteral);
      });

      it('should have the property hsEmailFromEmail (base name: "hs_email_from_email")', function() {
        // TODO: update the code to test the property hsEmailFromEmail
        expect(instance).to.have.property('hsEmailFromEmail');
        // expect(instance.hsEmailFromEmail).to.be(expectedValueLiteral);
      });

      it('should have the property hsEmailSubject (base name: "hs_email_subject")', function() {
        // TODO: update the code to test the property hsEmailSubject
        expect(instance).to.have.property('hsEmailSubject');
        // expect(instance.hsEmailSubject).to.be(expectedValueLiteral);
      });

      it('should have the property hsEmailText (base name: "hs_email_text")', function() {
        // TODO: update the code to test the property hsEmailText
        expect(instance).to.have.property('hsEmailText');
        // expect(instance.hsEmailText).to.be(expectedValueLiteral);
      });

      it('should have the property hsLastmodifieddate (base name: "hs_lastmodifieddate")', function() {
        // TODO: update the code to test the property hsLastmodifieddate
        expect(instance).to.have.property('hsLastmodifieddate');
        // expect(instance.hsLastmodifieddate).to.be(expectedValueLiteral);
      });

    });
  });

}));
