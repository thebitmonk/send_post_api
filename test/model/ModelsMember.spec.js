/*
 * SendPost API
 * SendPost API to send fast transactional emails to inbox
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
    describe('ModelsMember', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsMember();
      });

      it('should create an instance of ModelsMember', function() {
        // TODO: update the code to test ModelsMember
        expect(instance).to.be.a(SendPostApi.ModelsMember);
      });

      it('should have the property email (base name: "Email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "IsActive")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property isForbid (base name: "IsForbid")', function() {
        // TODO: update the code to test the property isForbid
        expect(instance).to.have.property('isForbid');
        // expect(instance.isForbid).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "Password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property rands (base name: "Rands")', function() {
        // TODO: update the code to test the property rands
        expect(instance).to.have.property('rands');
        // expect(instance.rands).to.be(expectedValueLiteral);
      });

      it('should have the property userName (base name: "UserName")', function() {
        // TODO: update the code to test the property userName
        expect(instance).to.have.property('userName');
        // expect(instance.userName).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

    });
  });

}));
