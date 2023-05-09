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
    describe('ModelsOnboardingChecklist', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsOnboardingChecklist();
      });

      it('should create an instance of ModelsOnboardingChecklist', function() {
        // TODO: update the code to test ModelsOnboardingChecklist
        expect(instance).to.be.a(SendPostApi.ModelsOnboardingChecklist);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property isDomainAdded (base name: "isDomainAdded")', function() {
        // TODO: update the code to test the property isDomainAdded
        expect(instance).to.have.property('isDomainAdded');
        // expect(instance.isDomainAdded).to.be(expectedValueLiteral);
      });

      it('should have the property isDomainVerified (base name: "isDomainVerified")', function() {
        // TODO: update the code to test the property isDomainVerified
        expect(instance).to.have.property('isDomainVerified');
        // expect(instance.isDomainVerified).to.be(expectedValueLiteral);
      });

      it('should have the property isFirstEmailSent (base name: "isFirstEmailSent")', function() {
        // TODO: update the code to test the property isFirstEmailSent
        expect(instance).to.have.property('isFirstEmailSent');
        // expect(instance.isFirstEmailSent).to.be(expectedValueLiteral);
      });

    });
  });

}));
