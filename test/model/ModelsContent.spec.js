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
 * Swagger Codegen version: 2.4.19
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
    describe('ModelsContent', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsContent();
      });

      it('should create an instance of ModelsContent', function() {
        // TODO: update the code to test ModelsContent
        expect(instance).to.be.a(SendPostApi.ModelsContent);
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

      it('should have the property preText (base name: "preText")', function() {
        // TODO: update the code to test the property preText
        expect(instance).to.have.property('preText');
        // expect(instance.preText).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property textBody (base name: "textBody")', function() {
        // TODO: update the code to test the property textBody
        expect(instance).to.have.property('textBody');
        // expect(instance.textBody).to.be(expectedValueLiteral);
      });

    });
  });

}));