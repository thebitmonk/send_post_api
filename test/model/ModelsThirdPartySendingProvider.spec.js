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
 * Swagger Codegen version: 2.4.32
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
    describe('ModelsThirdPartySendingProvider', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsThirdPartySendingProvider();
      });

      it('should create an instance of ModelsThirdPartySendingProvider', function() {
        // TODO: update the code to test ModelsThirdPartySendingProvider
        expect(instance).to.be.a(SendPostApi.ModelsThirdPartySendingProvider);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property domain (base name: "domain")', function() {
        // TODO: update the code to test the property domain
        expect(instance).to.have.property('domain');
        // expect(instance.domain).to.be(expectedValueLiteral);
      });

      it('should have the property endpoint (base name: "endpoint")', function() {
        // TODO: update the code to test the property endpoint
        expect(instance).to.have.property('endpoint');
        // expect(instance.endpoint).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property key (base name: "key")', function() {
        // TODO: update the code to test the property key
        expect(instance).to.have.property('key');
        // expect(instance.key).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property oauthToken (base name: "oauthToken")', function() {
        // TODO: update the code to test the property oauthToken
        expect(instance).to.have.property('oauthToken');
        // expect(instance.oauthToken).to.be(expectedValueLiteral);
      });

      it('should have the property port (base name: "port")', function() {
        // TODO: update the code to test the property port
        expect(instance).to.have.property('port');
        // expect(instance.port).to.be(expectedValueLiteral);
      });

      it('should have the property retryTime (base name: "retryTime")', function() {
        // TODO: update the code to test the property retryTime
        expect(instance).to.have.property('retryTime');
        // expect(instance.retryTime).to.be(expectedValueLiteral);
      });

      it('should have the property secret (base name: "secret")', function() {
        // TODO: update the code to test the property secret
        expect(instance).to.have.property('secret');
        // expect(instance.secret).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
