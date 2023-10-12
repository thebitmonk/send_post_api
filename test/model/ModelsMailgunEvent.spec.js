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
    describe('ModelsMailgunEvent', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsMailgunEvent();
      });

      it('should create an instance of ModelsMailgunEvent', function() {
        // TODO: update the code to test ModelsMailgunEvent
        expect(instance).to.be.a(SendPostApi.ModelsMailgunEvent);
      });

      it('should have the property clientInfo (base name: "client-info")', function() {
        // TODO: update the code to test the property clientInfo
        expect(instance).to.have.property('clientInfo');
        // expect(instance.clientInfo).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryStatus (base name: "delivery-status")', function() {
        // TODO: update the code to test the property deliveryStatus
        expect(instance).to.have.property('deliveryStatus');
        // expect(instance.deliveryStatus).to.be(expectedValueLiteral);
      });

      it('should have the property event (base name: "event")', function() {
        // TODO: update the code to test the property event
        expect(instance).to.have.property('event');
        // expect(instance.event).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property ip (base name: "ip")', function() {
        // TODO: update the code to test the property ip
        expect(instance).to.have.property('ip');
        // expect(instance.ip).to.be(expectedValueLiteral);
      });

      it('should have the property recipient (base name: "recipient")', function() {
        // TODO: update the code to test the property recipient
        expect(instance).to.have.property('recipient');
        // expect(instance.recipient).to.be(expectedValueLiteral);
      });

      it('should have the property severity (base name: "severity")', function() {
        // TODO: update the code to test the property severity
        expect(instance).to.have.property('severity');
        // expect(instance.severity).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property userVariables (base name: "user-variables")', function() {
        // TODO: update the code to test the property userVariables
        expect(instance).to.have.property('userVariables');
        // expect(instance.userVariables).to.be(expectedValueLiteral);
      });

    });
  });

}));
