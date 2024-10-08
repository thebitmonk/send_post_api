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
    describe('ModelsDetailedAlert', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsDetailedAlert();
      });

      it('should create an instance of ModelsDetailedAlert', function() {
        // TODO: update the code to test ModelsDetailedAlert
        expect(instance).to.be.a(SendPostApi.ModelsDetailedAlert);
      });

      it('should have the property active (base name: "active")', function() {
        // TODO: update the code to test the property active
        expect(instance).to.have.property('active');
        // expect(instance.active).to.be(expectedValueLiteral);
      });

      it('should have the property entityType (base name: "entityType")', function() {
        // TODO: update the code to test the property entityType
        expect(instance).to.have.property('entityType');
        // expect(instance.entityType).to.be(expectedValueLiteral);
      });

      it('should have the property entityValue (base name: "entityValue")', function() {
        // TODO: update the code to test the property entityValue
        expect(instance).to.have.property('entityValue');
        // expect(instance.entityValue).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property parameter (base name: "parameter")', function() {
        // TODO: update the code to test the property parameter
        expect(instance).to.have.property('parameter');
        // expect(instance.parameter).to.be(expectedValueLiteral);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property threshold (base name: "threshold")', function() {
        // TODO: update the code to test the property threshold
        expect(instance).to.have.property('threshold');
        // expect(instance.threshold).to.be(expectedValueLiteral);
      });

    });
  });

}));
