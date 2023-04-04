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
    describe('ModelsBackOffConfiguration', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsBackOffConfiguration();
      });

      it('should create an instance of ModelsBackOffConfiguration', function() {
        // TODO: update the code to test ModelsBackOffConfiguration
        expect(instance).to.be.a(SendPostApi.ModelsBackOffConfiguration);
      });

      it('should have the property concurrentConnections (base name: "concurrentConnections")', function() {
        // TODO: update the code to test the property concurrentConnections
        expect(instance).to.have.property('concurrentConnections');
        // expect(instance.concurrentConnections).to.be(expectedValueLiteral);
      });

      it('should have the property concurrentConnectionsType (base name: "concurrentConnectionsType")', function() {
        // TODO: update the code to test the property concurrentConnectionsType
        expect(instance).to.have.property('concurrentConnectionsType');
        // expect(instance.concurrentConnectionsType).to.be(expectedValueLiteral);
      });

      it('should have the property sendPerDay (base name: "sendPerDay")', function() {
        // TODO: update the code to test the property sendPerDay
        expect(instance).to.have.property('sendPerDay');
        // expect(instance.sendPerDay).to.be(expectedValueLiteral);
      });

      it('should have the property sendPerDayType (base name: "sendPerDayType")', function() {
        // TODO: update the code to test the property sendPerDayType
        expect(instance).to.have.property('sendPerDayType');
        // expect(instance.sendPerDayType).to.be(expectedValueLiteral);
      });

      it('should have the property sendPerHour (base name: "sendPerHour")', function() {
        // TODO: update the code to test the property sendPerHour
        expect(instance).to.have.property('sendPerHour');
        // expect(instance.sendPerHour).to.be(expectedValueLiteral);
      });

      it('should have the property sendPerHourType (base name: "sendPerHourType")', function() {
        // TODO: update the code to test the property sendPerHourType
        expect(instance).to.have.property('sendPerHourType');
        // expect(instance.sendPerHourType).to.be(expectedValueLiteral);
      });

      it('should have the property sendPerMinute (base name: "sendPerMinute")', function() {
        // TODO: update the code to test the property sendPerMinute
        expect(instance).to.have.property('sendPerMinute');
        // expect(instance.sendPerMinute).to.be(expectedValueLiteral);
      });

      it('should have the property sendPerMinuteType (base name: "sendPerMinuteType")', function() {
        // TODO: update the code to test the property sendPerMinuteType
        expect(instance).to.have.property('sendPerMinuteType');
        // expect(instance.sendPerMinuteType).to.be(expectedValueLiteral);
      });

    });
  });

}));
