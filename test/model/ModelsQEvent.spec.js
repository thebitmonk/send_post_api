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
    describe('ModelsQEvent', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsQEvent();
      });

      it('should create an instance of ModelsQEvent', function() {
        // TODO: update the code to test ModelsQEvent
        expect(instance).to.be.a(SendPostApi.ModelsQEvent);
      });

      it('should have the property accountID (base name: "accountID")', function() {
        // TODO: update the code to test the property accountID
        expect(instance).to.have.property('accountID');
        // expect(instance.accountID).to.be(expectedValueLiteral);
      });

      it('should have the property domainID (base name: "domainID")', function() {
        // TODO: update the code to test the property domainID
        expect(instance).to.have.property('domainID');
        // expect(instance.domainID).to.be(expectedValueLiteral);
      });

      it('should have the property eventID (base name: "eventID")', function() {
        // TODO: update the code to test the property eventID
        expect(instance).to.have.property('eventID');
        // expect(instance.eventID).to.be(expectedValueLiteral);
      });

      it('should have the property eventMetadata (base name: "eventMetadata")', function() {
        // TODO: update the code to test the property eventMetadata
        expect(instance).to.have.property('eventMetadata');
        // expect(instance.eventMetadata).to.be(expectedValueLiteral);
      });

      it('should have the property from (base name: "from")', function() {
        // TODO: update the code to test the property from
        expect(instance).to.have.property('from');
        // expect(instance.from).to.be(expectedValueLiteral);
      });

      it('should have the property fromName (base name: "fromName")', function() {
        // TODO: update the code to test the property fromName
        expect(instance).to.have.property('fromName');
        // expect(instance.fromName).to.be(expectedValueLiteral);
      });

      it('should have the property groups (base name: "groups")', function() {
        // TODO: update the code to test the property groups
        expect(instance).to.have.property('groups');
        // expect(instance.groups).to.be(expectedValueLiteral);
      });

      it('should have the property ipID (base name: "ipID")', function() {
        // TODO: update the code to test the property ipID
        expect(instance).to.have.property('ipID');
        // expect(instance.ipID).to.be(expectedValueLiteral);
      });

      it('should have the property ipPoolID (base name: "ipPoolID")', function() {
        // TODO: update the code to test the property ipPoolID
        expect(instance).to.have.property('ipPoolID');
        // expect(instance.ipPoolID).to.be(expectedValueLiteral);
      });

      it('should have the property messageID (base name: "messageID")', function() {
        // TODO: update the code to test the property messageID
        expect(instance).to.have.property('messageID');
        // expect(instance.messageID).to.be(expectedValueLiteral);
      });

      it('should have the property messageSubject (base name: "messageSubject")', function() {
        // TODO: update the code to test the property messageSubject
        expect(instance).to.have.property('messageSubject');
        // expect(instance.messageSubject).to.be(expectedValueLiteral);
      });

      it('should have the property messageType (base name: "messageType")', function() {
        // TODO: update the code to test the property messageType
        expect(instance).to.have.property('messageType');
        // expect(instance.messageType).to.be(expectedValueLiteral);
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

      it('should have the property subAccountID (base name: "subAccountID")', function() {
        // TODO: update the code to test the property subAccountID
        expect(instance).to.have.property('subAccountID');
        // expect(instance.subAccountID).to.be(expectedValueLiteral);
      });

      it('should have the property submittedAt (base name: "submittedAt")', function() {
        // TODO: update the code to test the property submittedAt
        expect(instance).to.have.property('submittedAt');
        // expect(instance.submittedAt).to.be(expectedValueLiteral);
      });

      it('should have the property to (base name: "to")', function() {
        // TODO: update the code to test the property to
        expect(instance).to.have.property('to');
        // expect(instance.to).to.be(expectedValueLiteral);
      });

      it('should have the property toName (base name: "toName")', function() {
        // TODO: update the code to test the property toName
        expect(instance).to.have.property('toName');
        // expect(instance.toName).to.be(expectedValueLiteral);
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

    });
  });

}));
