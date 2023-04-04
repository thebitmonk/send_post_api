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
    describe('ModelsIntegrationSettings', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsIntegrationSettings();
      });

      it('should create an instance of ModelsIntegrationSettings', function() {
        // TODO: update the code to test ModelsIntegrationSettings
        expect(instance).to.be.a(SendPostApi.ModelsIntegrationSettings);
      });

      it('should have the property autoEnableMonitoring (base name: "autoEnableMonitoring")', function() {
        // TODO: update the code to test the property autoEnableMonitoring
        expect(instance).to.have.property('autoEnableMonitoring');
        // expect(instance.autoEnableMonitoring).to.be(expectedValueLiteral);
      });

      it('should have the property emailTo (base name: "emailTo")', function() {
        // TODO: update the code to test the property emailTo
        expect(instance).to.have.property('emailTo');
        // expect(instance.emailTo).to.be(expectedValueLiteral);
      });

      it('should have the property frequency (base name: "frequency")', function() {
        // TODO: update the code to test the property frequency
        expect(instance).to.have.property('frequency');
        // expect(instance.frequency).to.be(expectedValueLiteral);
      });

      it('should have the property receiveReports (base name: "receiveReports")', function() {
        // TODO: update the code to test the property receiveReports
        expect(instance).to.have.property('receiveReports');
        // expect(instance.receiveReports).to.be(expectedValueLiteral);
      });

    });
  });

}));
