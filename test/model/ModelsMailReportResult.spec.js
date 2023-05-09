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
 * Swagger Codegen version: 2.4.31
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
    describe('ModelsMailReportResult', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsMailReportResult();
      });

      it('should create an instance of ModelsMailReportResult', function() {
        // TODO: update the code to test ModelsMailReportResult
        expect(instance).to.be.a(SendPostApi.ModelsMailReportResult);
      });

      it('should have the property body (base name: "body")', function() {
        // TODO: update the code to test the property body
        expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

      it('should have the property header (base name: "header")', function() {
        // TODO: update the code to test the property header
        expect(instance).to.have.property('header');
        // expect(instance.header).to.be(expectedValueLiteral);
      });

      it('should have the property seedList (base name: "seedList")', function() {
        // TODO: update the code to test the property seedList
        expect(instance).to.have.property('seedList');
        // expect(instance.seedList).to.be(expectedValueLiteral);
      });

      it('should have the property testId (base name: "testId")', function() {
        // TODO: update the code to test the property testId
        expect(instance).to.have.property('testId');
        // expect(instance.testId).to.be(expectedValueLiteral);
      });

    });
  });

}));
