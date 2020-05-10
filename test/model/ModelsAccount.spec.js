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
    describe('ModelsAccount', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsAccount();
      });

      it('should create an instance of ModelsAccount', function() {
        // TODO: update the code to test ModelsAccount
        expect(instance).to.be.a(SendPostApi.ModelsAccount);
      });

      it('should have the property apiKey (base name: "ApiKey")', function() {
        // TODO: update the code to test the property apiKey
        expect(instance).to.have.property('apiKey');
        // expect(instance.apiKey).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "Email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property verificationStatus (base name: "VerificationStatus")', function() {
        // TODO: update the code to test the property verificationStatus
        expect(instance).to.have.property('verificationStatus');
        // expect(instance.verificationStatus).to.be(expectedValueLiteral);
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

    });
  });

}));