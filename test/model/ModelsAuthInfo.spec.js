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
 * Swagger Codegen version: 2.4.19
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
    describe('ModelsAuthInfo', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsAuthInfo();
      });

      it('should create an instance of ModelsAuthInfo', function() {
        // TODO: update the code to test ModelsAuthInfo
        expect(instance).to.be.a(SendPostApi.ModelsAuthInfo);
      });

      it('should have the property accounts (base name: "Accounts")', function() {
        // TODO: update the code to test the property accounts
        expect(instance).to.have.property('accounts');
        // expect(instance.accounts).to.be(expectedValueLiteral);
      });

      it('should have the property member (base name: "Member")', function() {
        // TODO: update the code to test the property member
        expect(instance).to.have.property('member');
        // expect(instance.member).to.be(expectedValueLiteral);
      });

    });
  });

}));
