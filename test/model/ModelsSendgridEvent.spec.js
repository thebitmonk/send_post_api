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
 * Swagger Codegen version: 2.4.37
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
    describe('ModelsSendgridEvent', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsSendgridEvent();
      });

      it('should create an instance of ModelsSendgridEvent', function() {
        // TODO: update the code to test ModelsSendgridEvent
        expect(instance).to.be.a(SendPostApi.ModelsSendgridEvent);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property emailType (base name: "emailType")', function() {
        // TODO: update the code to test the property emailType
        expect(instance).to.have.property('emailType');
        // expect(instance.emailType).to.be(expectedValueLiteral);
      });

      it('should have the property event (base name: "event")', function() {
        // TODO: update the code to test the property event
        expect(instance).to.have.property('event');
        // expect(instance.event).to.be(expectedValueLiteral);
      });

      it('should have the property ip (base name: "ip")', function() {
        // TODO: update the code to test the property ip
        expect(instance).to.have.property('ip');
        // expect(instance.ip).to.be(expectedValueLiteral);
      });

      it('should have the property messageId (base name: "messageId")', function() {
        // TODO: update the code to test the property messageId
        expect(instance).to.have.property('messageId');
        // expect(instance.messageId).to.be(expectedValueLiteral);
      });

      it('should have the property reason (base name: "reason")', function() {
        // TODO: update the code to test the property reason
        expect(instance).to.have.property('reason');
        // expect(instance.reason).to.be(expectedValueLiteral);
      });

      it('should have the property sgMessageId (base name: "sg_message_id")', function() {
        // TODO: update the code to test the property sgMessageId
        expect(instance).to.have.property('sgMessageId');
        // expect(instance.sgMessageId).to.be(expectedValueLiteral);
      });

      it('should have the property smtpId (base name: "smtp-id")', function() {
        // TODO: update the code to test the property smtpId
        expect(instance).to.have.property('smtpId');
        // expect(instance.smtpId).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property subAccountId (base name: "subAccountId")', function() {
        // TODO: update the code to test the property subAccountId
        expect(instance).to.have.property('subAccountId');
        // expect(instance.subAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property tpspId (base name: "tpspId")', function() {
        // TODO: update the code to test the property tpspId
        expect(instance).to.have.property('tpspId');
        // expect(instance.tpspId).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property userAgent (base name: "userAgent")', function() {
        // TODO: update the code to test the property userAgent
        expect(instance).to.have.property('userAgent');
        // expect(instance.userAgent).to.be(expectedValueLiteral);
      });

    });
  });

}));
