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
 * Swagger Codegen version: 2.4.32
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
    describe('ModelsAIPStat', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsAIPStat();
      });

      it('should create an instance of ModelsAIPStat', function() {
        // TODO: update the code to test ModelsAIPStat
        expect(instance).to.be.a(SendPostApi.ModelsAIPStat);
      });

      it('should have the property ipid (base name: "ipid")', function() {
        // TODO: update the code to test the property ipid
        expect(instance).to.have.property('ipid');
        // expect(instance.ipid).to.be(expectedValueLiteral);
      });

      it('should have the property publicIP (base name: "publicIP")', function() {
        // TODO: update the code to test the property publicIP
        expect(instance).to.have.property('publicIP');
        // expect(instance.publicIP).to.be(expectedValueLiteral);
      });

      it('should have the property stat (base name: "stat")', function() {
        // TODO: update the code to test the property stat
        expect(instance).to.have.property('stat');
        // expect(instance.stat).to.be(expectedValueLiteral);
      });

    });
  });

}));
