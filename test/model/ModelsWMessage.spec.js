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
 * Swagger Codegen version: 2.4.39
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
    describe('ModelsWMessage', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsWMessage();
      });

      it('should create an instance of ModelsWMessage', function() {
        // TODO: update the code to test ModelsWMessage
        expect(instance).to.be.a(SendPostApi.ModelsWMessage);
      });

      it('should have the property accountID (base name: "AccountID")', function() {
        // TODO: update the code to test the property accountID
        expect(instance).to.have.property('accountID');
        // expect(instance.accountID).to.be(expectedValueLiteral);
      });

      it('should have the property from (base name: "From")', function() {
        // TODO: update the code to test the property from
        expect(instance).to.have.property('from');
        // expect(instance.from).to.be(expectedValueLiteral);
      });

      it('should have the property groups (base name: "Groups")', function() {
        // TODO: update the code to test the property groups
        expect(instance).to.have.property('groups');
        // expect(instance.groups).to.be(expectedValueLiteral);
      });

      it('should have the property IPID (base name: "IPID")', function() {
        // TODO: update the code to test the property IPID
        expect(instance).to.have.property('IPID');
        // expect(instance.IPID).to.be(expectedValueLiteral);
      });

      it('should have the property messageType (base name: "MessageType")', function() {
        // TODO: update the code to test the property messageType
        expect(instance).to.have.property('messageType');
        // expect(instance.messageType).to.be(expectedValueLiteral);
      });

      it('should have the property messageUUID (base name: "MessageUUID")', function() {
        // TODO: update the code to test the property messageUUID
        expect(instance).to.have.property('messageUUID');
        // expect(instance.messageUUID).to.be(expectedValueLiteral);
      });

      it('should have the property mockMessage (base name: "MockMessage")', function() {
        // TODO: update the code to test the property mockMessage
        expect(instance).to.have.property('mockMessage');
        // expect(instance.mockMessage).to.be(expectedValueLiteral);
      });

      it('should have the property mockTimeShift (base name: "MockTimeShift")', function() {
        // TODO: update the code to test the property mockTimeShift
        expect(instance).to.have.property('mockTimeShift');
        // expect(instance.mockTimeShift).to.be(expectedValueLiteral);
      });

      it('should have the property sMTPCode (base name: "SMTPCode")', function() {
        // TODO: update the code to test the property sMTPCode
        expect(instance).to.have.property('sMTPCode');
        // expect(instance.sMTPCode).to.be(expectedValueLiteral);
      });

      it('should have the property sMTPDescription (base name: "SMTPDescription")', function() {
        // TODO: update the code to test the property sMTPDescription
        expect(instance).to.have.property('sMTPDescription');
        // expect(instance.sMTPDescription).to.be(expectedValueLiteral);
      });

      it('should have the property subAccountID (base name: "SubAccountID")', function() {
        // TODO: update the code to test the property subAccountID
        expect(instance).to.have.property('subAccountID');
        // expect(instance.subAccountID).to.be(expectedValueLiteral);
      });

      it('should have the property submittedAt (base name: "SubmittedAt")', function() {
        // TODO: update the code to test the property submittedAt
        expect(instance).to.have.property('submittedAt');
        // expect(instance.submittedAt).to.be(expectedValueLiteral);
      });

      it('should have the property to (base name: "To")', function() {
        // TODO: update the code to test the property to
        expect(instance).to.have.property('to');
        // expect(instance.to).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "Type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
