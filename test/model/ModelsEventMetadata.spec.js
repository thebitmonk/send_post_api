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
    describe('ModelsEventMetadata', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEventMetadata();
      });

      it('should create an instance of ModelsEventMetadata', function() {
        // TODO: update the code to test ModelsEventMetadata
        expect(instance).to.be.a(SendPostApi.ModelsEventMetadata);
      });

      it('should have the property clickedURL (base name: "clickedURL")', function() {
        // TODO: update the code to test the property clickedURL
        expect(instance).to.have.property('clickedURL');
        // expect(instance.clickedURL).to.be(expectedValueLiteral);
      });

      it('should have the property device (base name: "device")', function() {
        // TODO: update the code to test the property device
        expect(instance).to.have.property('device');
        // expect(instance.device).to.be(expectedValueLiteral);
      });

      it('should have the property geo (base name: "geo")', function() {
        // TODO: update the code to test the property geo
        expect(instance).to.have.property('geo');
        // expect(instance.geo).to.be(expectedValueLiteral);
      });

      it('should have the property os (base name: "os")', function() {
        // TODO: update the code to test the property os
        expect(instance).to.have.property('os');
        // expect(instance.os).to.be(expectedValueLiteral);
      });

      it('should have the property rawUserAgent (base name: "rawUserAgent")', function() {
        // TODO: update the code to test the property rawUserAgent
        expect(instance).to.have.property('rawUserAgent');
        // expect(instance.rawUserAgent).to.be(expectedValueLiteral);
      });

      it('should have the property smtpCode (base name: "smtpCode")', function() {
        // TODO: update the code to test the property smtpCode
        expect(instance).to.have.property('smtpCode');
        // expect(instance.smtpCode).to.be(expectedValueLiteral);
      });

      it('should have the property smtpDescription (base name: "smtpDescription")', function() {
        // TODO: update the code to test the property smtpDescription
        expect(instance).to.have.property('smtpDescription');
        // expect(instance.smtpDescription).to.be(expectedValueLiteral);
      });

      it('should have the property trackedIP (base name: "trackedIP")', function() {
        // TODO: update the code to test the property trackedIP
        expect(instance).to.have.property('trackedIP');
        // expect(instance.trackedIP).to.be(expectedValueLiteral);
      });

      it('should have the property userAgent (base name: "userAgent")', function() {
        // TODO: update the code to test the property userAgent
        expect(instance).to.have.property('userAgent');
        // expect(instance.userAgent).to.be(expectedValueLiteral);
      });

    });
  });

}));
