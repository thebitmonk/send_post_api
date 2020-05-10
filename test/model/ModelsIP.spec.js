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
 * Swagger Codegen version: 2.4.13
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
    describe('ModelsIP', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsIP();
      });

      it('should create an instance of ModelsIP', function() {
        // TODO: update the code to test ModelsIP
        expect(instance).to.be.a(SendPostApi.ModelsIP);
      });

      it('should have the property autoWarmupEnabled (base name: "autoWarmupEnabled")', function() {
        // TODO: update the code to test the property autoWarmupEnabled
        expect(instance).to.have.property('autoWarmupEnabled');
        // expect(instance.autoWarmupEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property autoWarmupStage (base name: "autoWarmupStage")', function() {
        // TODO: update the code to test the property autoWarmupStage
        expect(instance).to.have.property('autoWarmupStage');
        // expect(instance.autoWarmupStage).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property publicIP (base name: "publicIP")', function() {
        // TODO: update the code to test the property publicIP
        expect(instance).to.have.property('publicIP');
        // expect(instance.publicIP).to.be(expectedValueLiteral);
      });

    });
  });

}));