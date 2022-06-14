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
 * Swagger Codegen version: 2.4.27
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
    describe('ModelsEIP', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEIP();
      });

      it('should create an instance of ModelsEIP', function() {
        // TODO: update the code to test ModelsEIP
        expect(instance).to.be.a(SendPostApi.ModelsEIP);
      });

      it('should have the property publicIP (base name: "publicIP")', function() {
        // TODO: update the code to test the property publicIP
        expect(instance).to.have.property('publicIP');
        // expect(instance.publicIP).to.be(expectedValueLiteral);
      });

    });
  });

}));
