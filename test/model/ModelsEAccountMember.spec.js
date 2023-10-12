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
 * Swagger Codegen version: 2.4.33
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
    describe('ModelsEAccountMember', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEAccountMember();
      });

      it('should create an instance of ModelsEAccountMember', function() {
        // TODO: update the code to test ModelsEAccountMember
        expect(instance).to.be.a(SendPostApi.ModelsEAccountMember);
      });

      it('should have the property companyName (base name: "companyName")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property currentEmailServiceProvider (base name: "currentEmailServiceProvider")', function() {
        // TODO: update the code to test the property currentEmailServiceProvider
        expect(instance).to.have.property('currentEmailServiceProvider');
        // expect(instance.currentEmailServiceProvider).to.be(expectedValueLiteral);
      });

      it('should have the property hexColor (base name: "hexColor")', function() {
        // TODO: update the code to test the property hexColor
        expect(instance).to.have.property('hexColor');
        // expect(instance.hexColor).to.be(expectedValueLiteral);
      });

      it('should have the property industry (base name: "industry")', function() {
        // TODO: update the code to test the property industry
        expect(instance).to.have.property('industry');
        // expect(instance.industry).to.be(expectedValueLiteral);
      });

      it('should have the property logoURL (base name: "logoURL")', function() {
        // TODO: update the code to test the property logoURL
        expect(instance).to.have.property('logoURL');
        // expect(instance.logoURL).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property onboardCFinished (base name: "onboardCFinished")', function() {
        // TODO: update the code to test the property onboardCFinished
        expect(instance).to.have.property('onboardCFinished');
        // expect(instance.onboardCFinished).to.be(expectedValueLiteral);
      });

      it('should have the property onboardQAnswered (base name: "onboardQAnswered")', function() {
        // TODO: update the code to test the property onboardQAnswered
        expect(instance).to.have.property('onboardQAnswered');
        // expect(instance.onboardQAnswered).to.be(expectedValueLiteral);
      });

      it('should have the property phoneNumber (base name: "phoneNumber")', function() {
        // TODO: update the code to test the property phoneNumber
        expect(instance).to.have.property('phoneNumber');
        // expect(instance.phoneNumber).to.be(expectedValueLiteral);
      });

      it('should have the property sendingVolumePerMonth (base name: "sendingVolumePerMonth")', function() {
        // TODO: update the code to test the property sendingVolumePerMonth
        expect(instance).to.have.property('sendingVolumePerMonth');
        // expect(instance.sendingVolumePerMonth).to.be(expectedValueLiteral);
      });

      it('should have the property switchingSendpostDescription (base name: "switchingSendpostDescription")', function() {
        // TODO: update the code to test the property switchingSendpostDescription
        expect(instance).to.have.property('switchingSendpostDescription');
        // expect(instance.switchingSendpostDescription).to.be(expectedValueLiteral);
      });

      it('should have the property uid (base name: "uid")', function() {
        // TODO: update the code to test the property uid
        expect(instance).to.have.property('uid');
        // expect(instance.uid).to.be(expectedValueLiteral);
      });

      it('should have the property verifyEmail (base name: "verifyEmail")', function() {
        // TODO: update the code to test the property verifyEmail
        expect(instance).to.have.property('verifyEmail');
        // expect(instance.verifyEmail).to.be(expectedValueLiteral);
      });

    });
  });

}));
