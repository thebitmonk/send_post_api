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
 * Swagger Codegen version: 2.4.14
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
    describe('ModelsSMTPStat', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsSMTPStat();
      });

      it('should create an instance of ModelsSMTPStat', function() {
        // TODO: update the code to test ModelsSMTPStat
        expect(instance).to.be.a(SendPostApi.ModelsSMTPStat);
      });

      it('should have the property count (base name: "count")', function() {
        // TODO: update the code to test the property count
        expect(instance).to.have.property('count');
        // expect(instance.count).to.be(expectedValueLiteral);
      });

      it('should have the property smtpCode (base name: "smtpCode")', function() {
        // TODO: update the code to test the property smtpCode
        expect(instance).to.have.property('smtpCode');
        // expect(instance.smtpCode).to.be(expectedValueLiteral);
      });

      it('should have the property smtpDescription (base name: "smtpDescription")', function() {
        // TODO: update the code to test the property smtpDescription
        expect(instance).to.have.property('smtpDescription');
        // expect(instance.smtpDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));
