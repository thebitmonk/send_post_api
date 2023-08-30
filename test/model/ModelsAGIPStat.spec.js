/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SendPostApi.ModelsAGIPStat();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ModelsAGIPStat', function() {
    it('should create an instance of ModelsAGIPStat', function() {
      // uncomment below and update the code to test ModelsAGIPStat
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be.a(SendPostApi.ModelsAGIPStat);
    });

    it('should have the property clicked (base name: "clicked")', function() {
      // uncomment below and update the code to test the property clicked
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property delivered (base name: "delivered")', function() {
      // uncomment below and update the code to test the property delivered
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property dropped (base name: "dropped")', function() {
      // uncomment below and update the code to test the property dropped
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property hardBounced (base name: "hardBounced")', function() {
      // uncomment below and update the code to test the property hardBounced
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property ipId (base name: "ipId")', function() {
      // uncomment below and update the code to test the property ipId
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property opened (base name: "opened")', function() {
      // uncomment below and update the code to test the property opened
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property processed (base name: "processed")', function() {
      // uncomment below and update the code to test the property processed
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property publicIP (base name: "publicIP")', function() {
      // uncomment below and update the code to test the property publicIP
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property sent (base name: "sent")', function() {
      // uncomment below and update the code to test the property sent
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property softBounced (base name: "softBounced")', function() {
      // uncomment below and update the code to test the property softBounced
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property spam (base name: "spam")', function() {
      // uncomment below and update the code to test the property spam
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribed (base name: "unsubscribed")', function() {
      // uncomment below and update the code to test the property unsubscribed
      //var instance = new SendPostApi.ModelsAGIPStat();
      //expect(instance).to.be();
    });

  });

}));
