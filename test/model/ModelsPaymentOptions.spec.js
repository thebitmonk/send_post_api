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
    instance = new SendPostApi.ModelsPaymentOptions();
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

  describe('ModelsPaymentOptions', function() {
    it('should create an instance of ModelsPaymentOptions', function() {
      // uncomment below and update the code to test ModelsPaymentOptions
      //var instance = new SendPostApi.ModelsPaymentOptions();
      //expect(instance).to.be.a(SendPostApi.ModelsPaymentOptions);
    });

    it('should have the property customerId (base name: "customerId")', function() {
      // uncomment below and update the code to test the property customerId
      //var instance = new SendPostApi.ModelsPaymentOptions();
      //expect(instance).to.be();
    });

    it('should have the property ipCount (base name: "ipCount")', function() {
      // uncomment below and update the code to test the property ipCount
      //var instance = new SendPostApi.ModelsPaymentOptions();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodId (base name: "paymentMethodId")', function() {
      // uncomment below and update the code to test the property paymentMethodId
      //var instance = new SendPostApi.ModelsPaymentOptions();
      //expect(instance).to.be();
    });

    it('should have the property priceId (base name: "priceId")', function() {
      // uncomment below and update the code to test the property priceId
      //var instance = new SendPostApi.ModelsPaymentOptions();
      //expect(instance).to.be();
    });

  });

}));
