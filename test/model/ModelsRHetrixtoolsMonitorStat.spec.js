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
    describe('ModelsRHetrixtoolsMonitorStat', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsRHetrixtoolsMonitorStat();
      });

      it('should create an instance of ModelsRHetrixtoolsMonitorStat', function() {
        // TODO: update the code to test ModelsRHetrixtoolsMonitorStat
        expect(instance).to.be.a(SendPostApi.ModelsRHetrixtoolsMonitorStat);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property stat (base name: "stat")', function() {
        // TODO: update the code to test the property stat
        expect(instance).to.have.property('stat');
        // expect(instance.stat).to.be(expectedValueLiteral);
      });

    });
  });

}));
