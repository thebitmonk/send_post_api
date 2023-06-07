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
    describe('ModelsEIPPool', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEIPPool();
      });

      it('should create an instance of ModelsEIPPool', function() {
        // TODO: update the code to test ModelsEIPPool
        expect(instance).to.be.a(SendPostApi.ModelsEIPPool);
      });

      it('should have the property ips (base name: "ips")', function() {
        // TODO: update the code to test the property ips
        expect(instance).to.have.property('ips');
        // expect(instance.ips).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property routingMapping (base name: "routingMapping")', function() {
        // TODO: update the code to test the property routingMapping
        expect(instance).to.have.property('routingMapping');
        // expect(instance.routingMapping).to.be(expectedValueLiteral);
      });

      it('should have the property routingStrategy (base name: "routingStrategy")', function() {
        // TODO: update the code to test the property routingStrategy
        expect(instance).to.have.property('routingStrategy');
        // expect(instance.routingStrategy).to.be(expectedValueLiteral);
      });

    });
  });

}));