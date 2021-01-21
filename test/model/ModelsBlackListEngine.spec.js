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
 * Swagger Codegen version: 2.4.18
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
    describe('ModelsBlackListEngine', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsBlackListEngine();
      });

      it('should create an instance of ModelsBlackListEngine', function() {
        // TODO: update the code to test ModelsBlackListEngine
        expect(instance).to.be.a(SendPostApi.ModelsBlackListEngine);
      });

      it('should have the property confidence (base name: "confidence")', function() {
        // TODO: update the code to test the property confidence
        expect(instance).to.have.property('confidence');
        // expect(instance.confidence).to.be(expectedValueLiteral);
      });

      it('should have the property detected (base name: "detected")', function() {
        // TODO: update the code to test the property detected
        expect(instance).to.have.property('detected');
        // expect(instance.detected).to.be(expectedValueLiteral);
      });

      it('should have the property elapsed (base name: "elapsed")', function() {
        // TODO: update the code to test the property elapsed
        expect(instance).to.have.property('elapsed');
        // expect(instance.elapsed).to.be(expectedValueLiteral);
      });

      it('should have the property engine (base name: "engine")', function() {
        // TODO: update the code to test the property engine
        expect(instance).to.have.property('engine');
        // expect(instance.engine).to.be(expectedValueLiteral);
      });

      it('should have the property reference (base name: "reference")', function() {
        // TODO: update the code to test the property reference
        expect(instance).to.have.property('reference');
        // expect(instance.reference).to.be(expectedValueLiteral);
      });

    });
  });

}));