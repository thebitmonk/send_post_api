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
    describe('ModelsEWebhook', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEWebhook();
      });

      it('should create an instance of ModelsEWebhook', function() {
        // TODO: update the code to test ModelsEWebhook
        expect(instance).to.be.a(SendPostApi.ModelsEWebhook);
      });

      it('should have the property clicked (base name: "clicked")', function() {
        // TODO: update the code to test the property clicked
        expect(instance).to.have.property('clicked');
        // expect(instance.clicked).to.be(expectedValueLiteral);
      });

      it('should have the property delivered (base name: "delivered")', function() {
        // TODO: update the code to test the property delivered
        expect(instance).to.have.property('delivered');
        // expect(instance.delivered).to.be(expectedValueLiteral);
      });

      it('should have the property dropped (base name: "dropped")', function() {
        // TODO: update the code to test the property dropped
        expect(instance).to.have.property('dropped');
        // expect(instance.dropped).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property hardBounced (base name: "hardBounced")', function() {
        // TODO: update the code to test the property hardBounced
        expect(instance).to.have.property('hardBounced');
        // expect(instance.hardBounced).to.be(expectedValueLiteral);
      });

      it('should have the property memberId (base name: "memberId")', function() {
        // TODO: update the code to test the property memberId
        expect(instance).to.have.property('memberId');
        // expect(instance.memberId).to.be(expectedValueLiteral);
      });

      it('should have the property opened (base name: "opened")', function() {
        // TODO: update the code to test the property opened
        expect(instance).to.have.property('opened');
        // expect(instance.opened).to.be(expectedValueLiteral);
      });

      it('should have the property processed (base name: "processed")', function() {
        // TODO: update the code to test the property processed
        expect(instance).to.have.property('processed');
        // expect(instance.processed).to.be(expectedValueLiteral);
      });

      it('should have the property sent (base name: "sent")', function() {
        // TODO: update the code to test the property sent
        expect(instance).to.have.property('sent');
        // expect(instance.sent).to.be(expectedValueLiteral);
      });

      it('should have the property softBounced (base name: "softBounced")', function() {
        // TODO: update the code to test the property softBounced
        expect(instance).to.have.property('softBounced');
        // expect(instance.softBounced).to.be(expectedValueLiteral);
      });

      it('should have the property spam (base name: "spam")', function() {
        // TODO: update the code to test the property spam
        expect(instance).to.have.property('spam');
        // expect(instance.spam).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueClick (base name: "uniqueClick")', function() {
        // TODO: update the code to test the property uniqueClick
        expect(instance).to.have.property('uniqueClick');
        // expect(instance.uniqueClick).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueOpen (base name: "uniqueOpen")', function() {
        // TODO: update the code to test the property uniqueOpen
        expect(instance).to.have.property('uniqueOpen');
        // expect(instance.uniqueOpen).to.be(expectedValueLiteral);
      });

      it('should have the property unsubscribed (base name: "unsubscribed")', function() {
        // TODO: update the code to test the property unsubscribed
        expect(instance).to.have.property('unsubscribed');
        // expect(instance.unsubscribed).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

    });
  });

}));
