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
    describe('UaparserUserAgent', function() {
      beforeEach(function() {
        instance = new SendPostApi.UaparserUserAgent();
      });

      it('should create an instance of UaparserUserAgent', function() {
        // TODO: update the code to test UaparserUserAgent
        expect(instance).to.be.a(SendPostApi.UaparserUserAgent);
      });

      it('should have the property family (base name: "Family")', function() {
        // TODO: update the code to test the property family
        expect(instance).to.have.property('family');
        // expect(instance.family).to.be(expectedValueLiteral);
      });

      it('should have the property major (base name: "Major")', function() {
        // TODO: update the code to test the property major
        expect(instance).to.have.property('major');
        // expect(instance.major).to.be(expectedValueLiteral);
      });

      it('should have the property minor (base name: "Minor")', function() {
        // TODO: update the code to test the property minor
        expect(instance).to.have.property('minor');
        // expect(instance.minor).to.be(expectedValueLiteral);
      });

      it('should have the property patch (base name: "Patch")', function() {
        // TODO: update the code to test the property patch
        expect(instance).to.have.property('patch');
        // expect(instance.patch).to.be(expectedValueLiteral);
      });

    });
  });

}));
