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
    describe('ModelsAccount', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsAccount();
      });

      it('should create an instance of ModelsAccount', function() {
        // TODO: update the code to test ModelsAccount
        expect(instance).to.be.a(SendPostApi.ModelsAccount);
      });

      it('should have the property alertSlackEndpoint (base name: "alertSlackEndpoint")', function() {
        // TODO: update the code to test the property alertSlackEndpoint
        expect(instance).to.have.property('alertSlackEndpoint');
        // expect(instance.alertSlackEndpoint).to.be(expectedValueLiteral);
      });

      it('should have the property apiKey (base name: "apiKey")', function() {
        // TODO: update the code to test the property apiKey
        expect(instance).to.have.property('apiKey');
        // expect(instance.apiKey).to.be(expectedValueLiteral);
      });

      it('should have the property brandColor (base name: "brandColor")', function() {
        // TODO: update the code to test the property brandColor
        expect(instance).to.have.property('brandColor');
        // expect(instance.brandColor).to.be(expectedValueLiteral);
      });

      it('should have the property companyName (base name: "companyName")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property currentEmailServiceProvider (base name: "currentEmailServiceProvider")', function() {
        // TODO: update the code to test the property currentEmailServiceProvider
        expect(instance).to.have.property('currentEmailServiceProvider');
        // expect(instance.currentEmailServiceProvider).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property incidentSlackEndpoint (base name: "incidentSlackEndpoint")', function() {
        // TODO: update the code to test the property incidentSlackEndpoint
        expect(instance).to.have.property('incidentSlackEndpoint');
        // expect(instance.incidentSlackEndpoint).to.be(expectedValueLiteral);
      });

      it('should have the property industry (base name: "industry")', function() {
        // TODO: update the code to test the property industry
        expect(instance).to.have.property('industry');
        // expect(instance.industry).to.be(expectedValueLiteral);
      });

      it('should have the property isAdmin (base name: "isAdmin")', function() {
        // TODO: update the code to test the property isAdmin
        expect(instance).to.have.property('isAdmin');
        // expect(instance.isAdmin).to.be(expectedValueLiteral);
      });

      it('should have the property isCanceled (base name: "isCanceled")', function() {
        // TODO: update the code to test the property isCanceled
        expect(instance).to.have.property('isCanceled');
        // expect(instance.isCanceled).to.be(expectedValueLiteral);
      });

      it('should have the property isLastPaymentFailed (base name: "isLastPaymentFailed")', function() {
        // TODO: update the code to test the property isLastPaymentFailed
        expect(instance).to.have.property('isLastPaymentFailed');
        // expect(instance.isLastPaymentFailed).to.be(expectedValueLiteral);
      });

      it('should have the property isUpgraded (base name: "isUpgraded")', function() {
        // TODO: update the code to test the property isUpgraded
        expect(instance).to.have.property('isUpgraded');
        // expect(instance.isUpgraded).to.be(expectedValueLiteral);
      });

      it('should have the property lockThreshold (base name: "lockThreshold")', function() {
        // TODO: update the code to test the property lockThreshold
        expect(instance).to.have.property('lockThreshold');
        // expect(instance.lockThreshold).to.be(expectedValueLiteral);
      });

      it('should have the property locked (base name: "locked")', function() {
        // TODO: update the code to test the property locked
        expect(instance).to.have.property('locked');
        // expect(instance.locked).to.be(expectedValueLiteral);
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

      it('should have the property sendingVolumePerMonth (base name: "sendingVolumePerMonth")', function() {
        // TODO: update the code to test the property sendingVolumePerMonth
        expect(instance).to.have.property('sendingVolumePerMonth');
        // expect(instance.sendingVolumePerMonth).to.be(expectedValueLiteral);
      });

      it('should have the property slackToken (base name: "slackToken")', function() {
        // TODO: update the code to test the property slackToken
        expect(instance).to.have.property('slackToken');
        // expect(instance.slackToken).to.be(expectedValueLiteral);
      });

      it('should have the property stripeBasePriceId (base name: "stripeBasePriceId")', function() {
        // TODO: update the code to test the property stripeBasePriceId
        expect(instance).to.have.property('stripeBasePriceId');
        // expect(instance.stripeBasePriceId).to.be(expectedValueLiteral);
      });

      it('should have the property stripeUsagePriceId (base name: "stripeUsagePriceId")', function() {
        // TODO: update the code to test the property stripeUsagePriceId
        expect(instance).to.have.property('stripeUsagePriceId');
        // expect(instance.stripeUsagePriceId).to.be(expectedValueLiteral);
      });

      it('should have the property switchingSendpostDescription (base name: "switchingSendpostDescription")', function() {
        // TODO: update the code to test the property switchingSendpostDescription
        expect(instance).to.have.property('switchingSendpostDescription');
        // expect(instance.switchingSendpostDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));