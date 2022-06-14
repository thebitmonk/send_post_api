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
 * Swagger Codegen version: 2.4.27
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
    describe('ModelsQEmailMessage', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsQEmailMessage();
      });

      it('should create an instance of ModelsQEmailMessage', function() {
        // TODO: update the code to test ModelsQEmailMessage
        expect(instance).to.be.a(SendPostApi.ModelsQEmailMessage);
      });

      it('should have the property accountID (base name: "accountID")', function() {
        // TODO: update the code to test the property accountID
        expect(instance).to.have.property('accountID');
        // expect(instance.accountID).to.be(expectedValueLiteral);
      });

      it('should have the property ampBody (base name: "ampBody")', function() {
        // TODO: update the code to test the property ampBody
        expect(instance).to.have.property('ampBody');
        // expect(instance.ampBody).to.be(expectedValueLiteral);
      });

      it('should have the property attachments (base name: "attachments")', function() {
        // TODO: update the code to test the property attachments
        expect(instance).to.have.property('attachments');
        // expect(instance.attachments).to.be(expectedValueLiteral);
      });

      it('should have the property attempt (base name: "attempt")', function() {
        // TODO: update the code to test the property attempt
        expect(instance).to.have.property('attempt');
        // expect(instance.attempt).to.be(expectedValueLiteral);
      });

      it('should have the property customFields (base name: "customFields")', function() {
        // TODO: update the code to test the property customFields
        expect(instance).to.have.property('customFields');
        // expect(instance.customFields).to.be(expectedValueLiteral);
      });

      it('should have the property emailType (base name: "emailType")', function() {
        // TODO: update the code to test the property emailType
        expect(instance).to.have.property('emailType');
        // expect(instance.emailType).to.be(expectedValueLiteral);
      });

      it('should have the property from (base name: "from")', function() {
        // TODO: update the code to test the property from
        expect(instance).to.have.property('from');
        // expect(instance.from).to.be(expectedValueLiteral);
      });

      it('should have the property groups (base name: "groups")', function() {
        // TODO: update the code to test the property groups
        expect(instance).to.have.property('groups');
        // expect(instance.groups).to.be(expectedValueLiteral);
      });

      it('should have the property headerBcc (base name: "headerBcc")', function() {
        // TODO: update the code to test the property headerBcc
        expect(instance).to.have.property('headerBcc');
        // expect(instance.headerBcc).to.be(expectedValueLiteral);
      });

      it('should have the property headerCc (base name: "headerCc")', function() {
        // TODO: update the code to test the property headerCc
        expect(instance).to.have.property('headerCc');
        // expect(instance.headerCc).to.be(expectedValueLiteral);
      });

      it('should have the property headerTo (base name: "headerTo")', function() {
        // TODO: update the code to test the property headerTo
        expect(instance).to.have.property('headerTo');
        // expect(instance.headerTo).to.be(expectedValueLiteral);
      });

      it('should have the property headers (base name: "headers")', function() {
        // TODO: update the code to test the property headers
        expect(instance).to.have.property('headers');
        // expect(instance.headers).to.be(expectedValueLiteral);
      });

      it('should have the property htmlBody (base name: "htmlBody")', function() {
        // TODO: update the code to test the property htmlBody
        expect(instance).to.have.property('htmlBody');
        // expect(instance.htmlBody).to.be(expectedValueLiteral);
      });

      it('should have the property ipID (base name: "ipID")', function() {
        // TODO: update the code to test the property ipID
        expect(instance).to.have.property('ipID');
        // expect(instance.ipID).to.be(expectedValueLiteral);
      });

      it('should have the property ipPool (base name: "ipPool")', function() {
        // TODO: update the code to test the property ipPool
        expect(instance).to.have.property('ipPool');
        // expect(instance.ipPool).to.be(expectedValueLiteral);
      });

      it('should have the property localIP (base name: "localIP")', function() {
        // TODO: update the code to test the property localIP
        expect(instance).to.have.property('localIP');
        // expect(instance.localIP).to.be(expectedValueLiteral);
      });

      it('should have the property messageID (base name: "messageID")', function() {
        // TODO: update the code to test the property messageID
        expect(instance).to.have.property('messageID');
        // expect(instance.messageID).to.be(expectedValueLiteral);
      });

      it('should have the property preText (base name: "preText")', function() {
        // TODO: update the code to test the property preText
        expect(instance).to.have.property('preText');
        // expect(instance.preText).to.be(expectedValueLiteral);
      });

      it('should have the property publicIP (base name: "publicIP")', function() {
        // TODO: update the code to test the property publicIP
        expect(instance).to.have.property('publicIP');
        // expect(instance.publicIP).to.be(expectedValueLiteral);
      });

      it('should have the property replyTo (base name: "replyTo")', function() {
        // TODO: update the code to test the property replyTo
        expect(instance).to.have.property('replyTo');
        // expect(instance.replyTo).to.be(expectedValueLiteral);
      });

      it('should have the property subAccountID (base name: "subAccountID")', function() {
        // TODO: update the code to test the property subAccountID
        expect(instance).to.have.property('subAccountID');
        // expect(instance.subAccountID).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property submittedAt (base name: "submittedAt")', function() {
        // TODO: update the code to test the property submittedAt
        expect(instance).to.have.property('submittedAt');
        // expect(instance.submittedAt).to.be(expectedValueLiteral);
      });

      it('should have the property textBody (base name: "textBody")', function() {
        // TODO: update the code to test the property textBody
        expect(instance).to.have.property('textBody');
        // expect(instance.textBody).to.be(expectedValueLiteral);
      });

      it('should have the property to (base name: "to")', function() {
        // TODO: update the code to test the property to
        expect(instance).to.have.property('to');
        // expect(instance.to).to.be(expectedValueLiteral);
      });

      it('should have the property trackClicks (base name: "trackClicks")', function() {
        // TODO: update the code to test the property trackClicks
        expect(instance).to.have.property('trackClicks');
        // expect(instance.trackClicks).to.be(expectedValueLiteral);
      });

      it('should have the property trackOpens (base name: "trackOpens")', function() {
        // TODO: update the code to test the property trackOpens
        expect(instance).to.have.property('trackOpens');
        // expect(instance.trackOpens).to.be(expectedValueLiteral);
      });

    });
  });

}));
