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
 * Swagger Codegen version: 2.4.37
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
    describe('ModelsEAccountSetting', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEAccountSetting();
      });

      it('should create an instance of ModelsEAccountSetting', function() {
        // TODO: update the code to test ModelsEAccountSetting
        expect(instance).to.be.a(SendPostApi.ModelsEAccountSetting);
      });

      it('should have the property companyName (base name: "companyName")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property logoURL (base name: "logoURL")', function() {
        // TODO: update the code to test the property logoURL
        expect(instance).to.have.property('logoURL');
        // expect(instance.logoURL).to.be(expectedValueLiteral);
      });

      it('should have the property memberId (base name: "memberId")', function() {
        // TODO: update the code to test the property memberId
        expect(instance).to.have.property('memberId');
        // expect(instance.memberId).to.be(expectedValueLiteral);
      });

    });
  });

}));
