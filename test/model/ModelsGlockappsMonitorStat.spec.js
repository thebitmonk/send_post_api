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
 * Swagger Codegen version: 2.4.17
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
    describe('ModelsGlockappsMonitorStat', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsGlockappsMonitorStat();
      });

      it('should create an instance of ModelsGlockappsMonitorStat', function() {
        // TODO: update the code to test ModelsGlockappsMonitorStat
        expect(instance).to.be.a(SendPostApi.ModelsGlockappsMonitorStat);
      });

      it('should have the property day (base name: "day")', function() {
        // TODO: update the code to test the property day
        expect(instance).to.have.property('day');
        // expect(instance.day).to.be(expectedValueLiteral);
      });

      it('should have the property listedCount (base name: "listedCount")', function() {
        // TODO: update the code to test the property listedCount
        expect(instance).to.have.property('listedCount');
        // expect(instance.listedCount).to.be(expectedValueLiteral);
      });

      it('should have the property listedIn (base name: "listedIn")', function() {
        // TODO: update the code to test the property listedIn
        expect(instance).to.have.property('listedIn');
        // expect(instance.listedIn).to.be(expectedValueLiteral);
      });

      it('should have the property month (base name: "month")', function() {
        // TODO: update the code to test the property month
        expect(instance).to.have.property('month');
        // expect(instance.month).to.be(expectedValueLiteral);
      });

      it('should have the property senderScore (base name: "senderScore")', function() {
        // TODO: update the code to test the property senderScore
        expect(instance).to.have.property('senderScore');
        // expect(instance.senderScore).to.be(expectedValueLiteral);
      });

      it('should have the property year (base name: "year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

    });
  });

}));
