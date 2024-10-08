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
    describe('ModelsConsumerStats', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsConsumerStats();
      });

      it('should create an instance of ModelsConsumerStats', function() {
        // TODO: update the code to test ModelsConsumerStats
        expect(instance).to.be.a(SendPostApi.ModelsConsumerStats);
      });

      it('should have the property connectedTimestamp (base name: "connectedTimestamp")', function() {
        // TODO: update the code to test the property connectedTimestamp
        expect(instance).to.have.property('connectedTimestamp');
        // expect(instance.connectedTimestamp).to.be(expectedValueLiteral);
      });

      it('should have the property messageCount (base name: "messageCount")', function() {
        // TODO: update the code to test the property messageCount
        expect(instance).to.have.property('messageCount');
        // expect(instance.messageCount).to.be(expectedValueLiteral);
      });

      it('should have the property messageDepth (base name: "messageDepth")', function() {
        // TODO: update the code to test the property messageDepth
        expect(instance).to.have.property('messageDepth');
        // expect(instance.messageDepth).to.be(expectedValueLiteral);
      });

      it('should have the property messagesFinished (base name: "messagesFinished")', function() {
        // TODO: update the code to test the property messagesFinished
        expect(instance).to.have.property('messagesFinished');
        // expect(instance.messagesFinished).to.be(expectedValueLiteral);
      });

      it('should have the property messagesRecieved (base name: "messagesRecieved")', function() {
        // TODO: update the code to test the property messagesRecieved
        expect(instance).to.have.property('messagesRecieved');
        // expect(instance.messagesRecieved).to.be(expectedValueLiteral);
      });

      it('should have the property messagesRequeued (base name: "messagesRequeued")', function() {
        // TODO: update the code to test the property messagesRequeued
        expect(instance).to.have.property('messagesRequeued');
        // expect(instance.messagesRequeued).to.be(expectedValueLiteral);
      });

    });
  });

}));
