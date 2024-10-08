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
 * Swagger Codegen version: 2.4.43
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
    describe('ModelsCity', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsCity();
      });

      it('should create an instance of ModelsCity', function() {
        // TODO: update the code to test ModelsCity
        expect(instance).to.be.a(SendPostApi.ModelsCity);
      });

      it('should have the property cityID (base name: "cityID")', function() {
        // TODO: update the code to test the property cityID
        expect(instance).to.have.property('cityID');
        // expect(instance.cityID).to.be(expectedValueLiteral);
      });

      it('should have the property continentCode (base name: "continentCode")', function() {
        // TODO: update the code to test the property continentCode
        expect(instance).to.have.property('continentCode');
        // expect(instance.continentCode).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "countryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property postalCode (base name: "postalCode")', function() {
        // TODO: update the code to test the property postalCode
        expect(instance).to.have.property('postalCode');
        // expect(instance.postalCode).to.be(expectedValueLiteral);
      });

      it('should have the property timeZone (base name: "timeZone")', function() {
        // TODO: update the code to test the property timeZone
        expect(instance).to.have.property('timeZone');
        // expect(instance.timeZone).to.be(expectedValueLiteral);
      });

    });
  });

}));
