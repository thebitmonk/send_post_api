/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    describe('ModelsEmailMessage', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEmailMessage();
      });

      it('should create an instance of ModelsEmailMessage', function() {
        // TODO: update the code to test ModelsEmailMessage
        expect(instance).to.be.a(SendPostApi.ModelsEmailMessage);
      });

      it('should have the property ampBody (base name: "ampBody")', function() {
        // TODO: update the code to test the property ampBody
        expect(instance).to.have.property('ampBody');
        // expect(instance.ampBody).to.be(expectedValueLiteral);
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

      it('should have the property ippool (base name: "ippool")', function() {
        // TODO: update the code to test the property ippool
        expect(instance).to.have.property('ippool');
        // expect(instance.ippool).to.be(expectedValueLiteral);
      });

      it('should have the property preText (base name: "preText")', function() {
        // TODO: update the code to test the property preText
        expect(instance).to.have.property('preText');
        // expect(instance.preText).to.be(expectedValueLiteral);
      });

      it('should have the property replyTo (base name: "replyTo")', function() {
        // TODO: update the code to test the property replyTo
        expect(instance).to.have.property('replyTo');
        // expect(instance.replyTo).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property template (base name: "template")', function() {
        // TODO: update the code to test the property template
        expect(instance).to.have.property('template');
        // expect(instance.template).to.be(expectedValueLiteral);
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
