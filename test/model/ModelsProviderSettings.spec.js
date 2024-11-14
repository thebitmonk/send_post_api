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
    describe('ModelsProviderSettings', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsProviderSettings();
      });

      it('should create an instance of ModelsProviderSettings', function() {
        // TODO: update the code to test ModelsProviderSettings
        expect(instance).to.be.a(SendPostApi.ModelsProviderSettings);
      });

      it('should have the property backOffConfiguration (base name: "backOffConfiguration")', function() {
        // TODO: update the code to test the property backOffConfiguration
        expect(instance).to.have.property('backOffConfiguration');
        // expect(instance.backOffConfiguration).to.be(expectedValueLiteral);
      });

      it('should have the property backOffTrigger (base name: "backOffTrigger")', function() {
        // TODO: update the code to test the property backOffTrigger
        expect(instance).to.have.property('backOffTrigger');
        // expect(instance.backOffTrigger).to.be(expectedValueLiteral);
      });

      it('should have the property maxConcurrentConnections (base name: "maxConcurrentConnections")', function() {
        // TODO: update the code to test the property maxConcurrentConnections
        expect(instance).to.have.property('maxConcurrentConnections');
        // expect(instance.maxConcurrentConnections).to.be(expectedValueLiteral);
      });

      it('should have the property maxSendPerDay (base name: "maxSendPerDay")', function() {
        // TODO: update the code to test the property maxSendPerDay
        expect(instance).to.have.property('maxSendPerDay');
        // expect(instance.maxSendPerDay).to.be(expectedValueLiteral);
      });

      it('should have the property maxSendPerHour (base name: "maxSendPerHour")', function() {
        // TODO: update the code to test the property maxSendPerHour
        expect(instance).to.have.property('maxSendPerHour');
        // expect(instance.maxSendPerHour).to.be(expectedValueLiteral);
      });

      it('should have the property maxSendPerMinute (base name: "maxSendPerMinute")', function() {
        // TODO: update the code to test the property maxSendPerMinute
        expect(instance).to.have.property('maxSendPerMinute');
        // expect(instance.maxSendPerMinute).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property warmupSettings (base name: "warmupSettings")', function() {
        // TODO: update the code to test the property warmupSettings
        expect(instance).to.have.property('warmupSettings');
        // expect(instance.warmupSettings).to.be(expectedValueLiteral);
      });

    });
  });

}));
